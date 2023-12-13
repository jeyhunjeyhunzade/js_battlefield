const a = new ArrayBuffer(6);
// ArrayBuffer { [Uint8Contents]: <00 00 00 00 00 00>, byteLength: 6 }

let a8 = new Uint8Array(a);
a8[0] = 45;
// ArrayBuffer { [Uint8Contents]: <2d 00 00 00 00 00>, byteLength: 6 }

a8[2] = 45;
// ArrayBuffer { [Uint8Contents]: <2d 00 2d 00 00 00>, byteLength: 6 }

let a16 = new Uint16Array(a);
// Uint16Array(3) [ 45, 45, 0 ]

a16[2] = 0x4545;
// ArrayBuffer { [Uint8Contents]: <2d 00 2d 00 45 45>, byteLength: 6 }
