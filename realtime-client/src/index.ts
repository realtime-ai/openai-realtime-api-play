
import events from "events";


import { WavStreamPlayer, WavRecorder } from "./lib/wavtools"

class RealtimeClient extends events.EventEmitter {
  constructor() {
    super();
  }
}


export { RealtimeClient }