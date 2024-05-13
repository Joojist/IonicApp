# Travel App 

* Kristel Kolkanen
* Daniel Kupinski
* Morten-Paul Mühlberg
* Kristjan Peedisson
* Jelizaveta Kruglova

## Äpi installeerimine ja Androidil käivitamine 

- Lae alla ja installeeri Node.js

- Ava Visual Studio Code

- Ava terminal ja sisesta:  ```npm install -g @ionic/cli@latest```

- Klooni meie IonicApp repositoorium Githubist, kasutades ```git clone https://github.com/Joojist/IonicApp.git``` 

- Ava uus terminal ja sisesta: ```npm install```

## Androidil käivitamine

- Ava Visual Studios äpi kaust
- Sisesta terminali: ```ionic cap add android```

- Sisesta terminali: ```ionic cap open android```

- Sulle avaneb Android Studio

- Android Studios ava menüüribalt ```Build -> Build bundle(s)/APK(s() -> Build APK(s)```

- Android Studio buildib Ionicu äpi apk faili ja alla tekib teade kui fail on valmis builditud.

- Teates vajuta ```locate```, mis avab sulle kausta, kus asub apk fail app-debug.apk

- Ühenda telefon arvutiga

- Tõsta app-debug.apk telefoni, endale sobivasse kausta

- Ava telefonist app-debug.apk ning installeeri see

- Ava äpp

## Veebibrauseris käivitamine

- Ava Visual Studios äpi kaust

- Ava uus terminal ning sisesta: ```ionic serve```

- Brauser avab äpi aadressil: ```http://localhost:8100/```


## Tutorial in English

To get started with this project, follow the steps below:

### Prerequisites

Before running the app, make sure you have the following installed on your machine:
- Node.js: [Download Node.js](https://nodejs.org/)
- Ionic CLI: You can install it globally using npm by running:
```bash
npm install -g @ionic/cli
```

### Installing Dependencies

Once you have Node.js and the Ionic CLI installed, navigate to the project directory in your terminal and run the following command to install project dependencies:

```bash
npm install
```

This will install all the necessary dependencies listed in the `package.json` file.

### Running the App

To run the app, you have two options:

1. **Run on Emulator:**
    - Make sure you have an Android emulator set up and running on your machine.
    - Run the following command to build and deploy the app to the emulator:
      ```bash
      ionic capacitor run android
      ```
    - This command will build the app and deploy it to the connected emulator.

2. **Run with Ionic Serve:**
    - If you prefer to run the app in a web browser for development purposes, you can use Ionic's development server.
    - Run the following command to start the Ionic server:
      ```bash
      ionic serve
      ```
    - This will compile the app and open it in your default web browser. You can then interact with the app in the browser.

### Changing to Device Mode

When running the app with `ionic serve`, it runs in a browser environment by default. To simulate the app running on a mobile device and access features like device orientation, you can switch to device mode:
- Open the browser's developer tools (usually by pressing F12 or right-clicking and selecting "Inspect").
- Toggle the device toolbar to simulate a mobile device. You can usually find this option in the developer tools menu or by pressing `Ctrl + Shift + M`.
- Reload the page to see the app in device mode.
