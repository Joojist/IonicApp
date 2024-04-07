import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plugins, Capacitor } from '@capacitor/core';

const { Permissions, MediaRecorder } = Plugins;

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string = '';
  public recording: boolean = false;
  private mediaRecorder: any; // MediaRecorder object

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
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
    if (Capacitor.isNative) {
      const permissionResult = await Permissions['requestPermission']('microphone');
      if (permissionResult.state !== 'granted') {
        console.error('Microphone permission not granted');
        return;
      }
    }

    try {
      this.mediaRecorder = await MediaRecorder['create']();
      const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.mediaRecorder.start(audioStream);
    } catch (error) {
      console.error('Error starting recording:', error);
    }
  }

  async stopRecording() {
    try {
      await this.mediaRecorder.stop();
      const blob = await this.mediaRecorder.getAudio();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'recording.wav'; // Change file name and format if needed
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error stopping recording:', error);
    }
  }
}