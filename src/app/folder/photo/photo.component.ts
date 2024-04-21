import { Component, OnInit } from '@angular/core';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { HttpClient } from '@angular/common/http';
import { LoadingController, Platform, ToastController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { finalize } from 'rxjs/operators';

const IMAGE_DIR = 'stored-images';

interface LocalFile {
	name: string;
	path: string;
	data: string;
}

@Component({
	selector: 'app-photo',
	templateUrl: './photo.component.html',
	styleUrls: ['./photo.component.scss'],
})


export class AppPage implements OnInit {
	images: LocalFile[] = [];

	constructor(
		private plt: Platform,
		private http: HttpClient,
		private loadingCtrl: LoadingController,
		private toastCtrl: ToastController
	) {}

	async ngOnInit() {
		this.loadFiles();
	}

	async loadFiles() {
		this.images = [];

		const loading = await this.loadingCtrl.create({
			message: 'Loading data...'
		});
		await loading.present();

		Filesystem.readdir({
			path: IMAGE_DIR,
			directory: Directory.Data
		})
			.then(
				(result) => {
					this.loadFileData(result.files.map((x) => x.name));
				},
				async (err) => {
					// Folder does not yet exists!
					await Filesystem.mkdir({
						path: IMAGE_DIR,
						directory: Directory.Data
					});
				}
			)
			.then((_) => {
				loading.dismiss();
			});
	}

	// Get the actual base64 data of an image
	// base on the name of the file
	async loadFileData(fileNames: string[]) {
		for (let f of fileNames) {
			const filePath = `${IMAGE_DIR}/${f}`;

			const readFile = await Filesystem.readFile({
				path: filePath,
				directory: Directory.Data
			});

			this.images.push({
				name: f,
				path: filePath,
				data: `data:image/jpeg;base64,${readFile.data}`
			});
		}
	}

	async presentToast(text: string) {
		const toast = await this.toastCtrl.create({
			message: text,
			duration: 3000
		});
		toast.present();
	}	

	async selectImage() {
		const image = await Camera.getPhoto({
			quality: 90,
			allowEditing: false,
			resultType: CameraResultType.Uri,
			source: CameraSource.Photos // Camera, Photos or Prompt!
		});
	
		if (image) {
			this.saveImage(image)
		}
	}

	async saveImage(photo: Photo) {
		const base64Data = await this.readAsBase64(photo);
	
		const fileName = new Date().getTime() + '.jpeg';
		const savedFile = await Filesystem.writeFile({
			path: `${IMAGE_DIR}/${fileName}`,
			data: base64Data,
			directory: Directory.Data
		});
	
		// Reload the file list
		// Improve by only loading for the new image and unshifting array!
		this.loadFiles();
	}

	private async readAsBase64(photo: Photo) {
		if (this.plt.is('hybrid')) {
			// Check if photo.path is defined
			if (photo.path) {
				const file = await Filesystem.readFile({
					path: photo.path
				});
	
				return file.data;
			} else {
				// Handle the case where photo.path is undefined
				throw new Error("Path for the photo is undefined.");
			}
		} else {
			if (photo.webPath) {
				// Fetch the photo, read as a blob, then convert to base64 format
				const response = await fetch(photo.webPath);
				const blob = await response.blob();
	
				return await this.convertBlobToBase64(blob) as string;
			} else {
				throw new Error("Web path for the photo is undefined.");
			}
		}
	}
	
	
	convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
		const reader = new FileReader;
		reader.onerror = reject;
		reader.onload = () => {
			resolve(reader.result);
		};
		reader.readAsDataURL(blob);
	});

	async startUpload(file: LocalFile) {
		const response = await fetch(file.data);
		const blob = await response.blob();
		const formData = new FormData();
		formData.append('file', blob, file.name);
		this.uploadData(formData);
	}
	
	async uploadData(formData: FormData) {
		const loading = await this.loadingCtrl.create({
			message: 'Uploading image...',
		});
		await loading.present();
	
		// Use your own API!
		const url = 'http://localhost:52325/folder/Gallery';
	
		this.http.post(url, formData)
			.pipe(
				finalize(() => {
					loading.dismiss();
				})
			)
			.subscribe(res => {
				if ('') {
					this.presentToast('File upload complete.')
				} else {
					this.presentToast('File upload failed.')
				}
			});
	}
		
	async deleteImage(file: LocalFile) {
		await Filesystem.deleteFile({
			directory: Directory.Data,
			path: file.path
		});
		this.loadFiles();
		this.presentToast('File removed.');
	}
}