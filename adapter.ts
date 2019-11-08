interface AppleDevices{
  useLightningToCharge();
}

interface GenericDevices{
  useMicroUsbToCharge();
}

class iPhone implements AppleDevices{
  useLightningToCharge(){
    console.log('Charging device with Lightning Conector....');
  }
}

class GooglePixel implements GenericDevices{
  useMicroUsbToCharge(){
    console.log('Charging device with MicroUSB Conector....');
  }
}

class LightningToMicroUSBAdapter implements GenericDevices{
  iPhoneDevice: iPhone;

  constructor(iphone: iPhone){
    this.iPhoneDevice = iphone;
  }

  useMicroUsbToCharge(){
    console.log('Want to use micro USB, converting...');
    this.iPhoneDevice.useLightningToCharge();
  }
}

let iphone = new iPhone();
let chargeAdaptor = new LightningToMicroUSBAdapter(iphone);
chargeAdaptor.useMicroUsbToCharge();