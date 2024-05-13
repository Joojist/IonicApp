import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VoiceRecorder, RecordingData } from 'capacitor-voice-recorder';

interface LocalFile {
  name: string;
  path: string;
  data: string;
}

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string = '';
  public recording: boolean = false;

  constructor(private activatedRoute: ActivatedRoute) {}

  async ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') || '';
  }

  async toggleRecording() {
    if (!this.recording) {
      await this.startRecording();
    } else {
      await this.stopRecording();
    }
    this.recording = !this.recording;
  }

  async startRecording() {
    try {
      console.log('Requesting microphone permission...');
      const permissionResult =
        await VoiceRecorder.requestAudioRecordingPermission();

      if (permissionResult.value) {
        console.log('Microphone permission granted');
        console.log('Attempting to start recording...');
        const recordingResult = await VoiceRecorder.startRecording();

        if (recordingResult.value) {
          console.log('Recording started successfully');
        } else {
          console.error('Error starting recording:', recordingResult);
        }
      } else {
        console.error('Microphone permission not granted');
      }
    } catch (error) {
      console.error('Error starting recording:', error);
    }
  }

  async stopRecording() {
    try {
      console.log('Attempting to stop recording...');
      const recordingResult: RecordingData =
        await VoiceRecorder.stopRecording();

      if (recordingResult.value) {
        console.log('Recording stopped successfully');

        // Save the recording locally
        const audioData: string = recordingResult.value.recordDataBase64;
        const audioBlob: Blob = this.base64toBlob(audioData, 'audio/wav');
        this.saveBlobLocally(audioBlob, 'recording.wav');
      } else {
        console.error('Error stopping recording:', recordingResult);
      }
    } catch (error) {
      console.error('Error stopping recording:', error);
    }
  }

  // Convert base64 data to Blob
  base64toBlob(base64Data: string, contentType: string): Blob {
    const byteCharacters = atob(base64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: contentType });
  }

  // Save Blob locally
  saveBlobLocally(blob: Blob, fileName: string): void {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }
}
