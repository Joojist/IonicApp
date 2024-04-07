import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VoiceRecorder } from 'capacitor-voice-recorder';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string = '';
  public recording: boolean = false;

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
    try {
      console.log('Requesting microphone permission...');
      const permissionResult = await VoiceRecorder.requestAudioRecordingPermission();
  
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
      const recordingResult = await VoiceRecorder.stopRecording();
  
      if (recordingResult.value) {
        console.log('Recording stopped successfully');
      } else {
        console.error('Error stopping recording:', recordingResult);
      }
    } catch (error) {
      console.error('Error stopping recording:', error);
    }
  }
    
}