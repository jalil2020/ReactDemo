import React from "react";
import { Component } from "react";




class Car {
    constructor(name){
      this.brand = name   
    }
    present() {
        return 'I have a ' + this.brand;
      }
}

export const Greet = () =><h1>Hello haker</h1>