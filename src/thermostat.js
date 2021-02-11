'use strict';

class Thermostat {

  constructor() {
    this.DEFAULT_TEMPERATURE = 20;
    this.temperature = this.DEFAULT_TEMPERATURE;
    this.MINIMUM_TEMPERATURE = 10;
    this.POWER_SAVING = false;
    this.MAX_LIMIT_POWER_SAVING_OFF = 32;
    this.MAX_LIMIT_POWER_SAVING_ON = 25
  }

  getCurrentTemperature(){
    return this.temperature;
  }

  up(){
    if (this.isMaximumTemperature()){
      return;
    }
     this.temperature += 1;
  }

  down(){
    if (this.isMinimumTemperature()){
      return;
    }
    this.temperature -= 1;
  }

  isMinimumTemperature(){
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }

  isMaximumTemperature(){
    if(this.isPowerSavingOn() === false) {
      return this.temperature === this.MAX_LIMIT_POWER_SAVING_OFF;
    }
    return this.temperature === this.MAX_LIMIT_POWER_SAVING_ON;
  }

  isPowerSavingOn(){
    return this.POWER_SAVING === true;
  }

  turnOffPowerSaving(){
    this.POWER_SAVING = false;
  }

  turnOnPowerSaving(){
    this.POWER_SAVING = true;
  }

  resetTemp(){
    this.temperature = 20;
  }
};
