// Generated by the protocol buffer compiler.  DO NOT EDIT!
// Source: example3.proto

import * as __pb__ from '../../lib/protobuf'


export class Donkey implements __pb__.Message {
  hi: string;

  constructor() {
    this.hi = "";
  }

  MergeFrom(d: __pb__.Internal.Decoder): void {
    while (!d.isEOF()) {
      let [fn, wt] = d.readTag();
      switch(fn) {
        case 1:
        this.hi = d.readString();
        break;
        default:
        d.skipWireType(wt)
      }
    }
  }

  WriteTo(e: __pb__.Internal.Encoder): void {
    if (this.hi != "") {
      e.writeTag(1, 2);
      e.writeString(this.hi);
    }
  }
}

export class Funky implements __pb__.Message {
  monkey: Funky.Monkey | null;
  dokey: Donkey | null;

  constructor() {
    this.monkey = null;
    this.dokey = null;
  }

  MergeFrom(d: __pb__.Internal.Decoder): void {
    while (!d.isEOF()) {
      let [fn, wt] = d.readTag();
      switch(fn) {
        case 1:
        if (this.monkey == null) this.monkey = new Funky.Monkey();
        this.monkey.MergeFrom(d.readDecoder());
        break;
        case 2:
        if (this.dokey == null) this.dokey = new Donkey();
        this.dokey.MergeFrom(d.readDecoder());
        break;
        default:
        d.skipWireType(wt)
      }
    }
  }

  WriteTo(e: __pb__.Internal.Encoder): void {
    {
      const msg = this.monkey;
      if (msg != null) {
        let nested = new __pb__.Internal.Encoder();
        msg.WriteTo(nested);
        e.writeEncoder(nested, 1)
      }
    }
    {
      const msg = this.dokey;
      if (msg != null) {
        let nested = new __pb__.Internal.Encoder();
        msg.WriteTo(nested);
        e.writeEncoder(nested, 2)
      }
    }
  }
}

export namespace Funky {
  export class Monkey implements __pb__.Message {
    hi: string;

    constructor() {
      this.hi = "";
    }

    MergeFrom(d: __pb__.Internal.Decoder): void {
      while (!d.isEOF()) {
        let [fn, wt] = d.readTag();
        switch(fn) {
          case 1:
          this.hi = d.readString();
          break;
          default:
          d.skipWireType(wt)
        }
      }
    }

    WriteTo(e: __pb__.Internal.Encoder): void {
      if (this.hi != "") {
        e.writeTag(1, 2);
        e.writeString(this.hi);
      }
    }
  }
}
