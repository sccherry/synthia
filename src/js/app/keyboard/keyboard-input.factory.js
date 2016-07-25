'use strict';

import keyboardJS from 'keyboardjs';
import _ from 'underscore';

export default function KeyboardInputFactory( MidiUtil ) {
  const factory = {
    bind: bind,
    unbind: unbind
  };

  return factory;

  ///////////////

  function bind( keydown, keyup ) {
    const keyMap = {
      'a': 60, // a:C
      'w': 61, // w:C#/Db
      's': 62, // s:D
      'e': 63, // e:D#/Eb
      'd': 64, // d:E
      'f': 65, // f:F
      't': 66, // t:F#/Gb
      'g': 67, // g:G
      'y': 68, // y:G#/Ab
      'h': 69, // h:A
      'u': 70, // u:A#/Bb
      'j': 71, // j:B
      'k': 72  // k:C
    };

    _.each( _.keys( keyMap ), key => {
      let freq = MidiUtil.mtof( keyMap[key] );

      keyboardJS.bind( key, e => {
        e.preventRepeat();

        keydown( freq );
      }, e => {
        keyup( freq );
      });
    });
  }

  function unbind() {
    keyboardJS.reset();
  }
}

KeyboardInputFactory.$inject = [
  'midiUtilities'
];

