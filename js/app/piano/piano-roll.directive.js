define([
  'underscore',
], function (_) {
  'use strict';

  function Directive() {
    var directive = {
      restrict: 'EA',
      templateUrl: '../templates/piano/piano-roll.directive.html',
      scope: {
        mousedown: '=',
        mouseup: '='
      },
      controller: Controller,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }

  Controller.$inject = [
    'midiUtilities'
  ];

  function Controller(MidiUtil) {
    var vm = this;

    // 21-108 is range of standard keyboard in MIDI numbers
    vm.keys = _.range(21, 109);

    vm.noteOn = function (midi) {
      vm.mousedown(MidiUtil.mtof(midi));
    };

    vm.noteOff = function (midi) {
      vm.mouseup(MidiUtil.mtof(midi));
    };
  }

  return Directive;
});
