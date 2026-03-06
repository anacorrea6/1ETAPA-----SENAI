from machine import Pin
from utime import sleep

ledVermelho= Pin(16,Pin.OUT)
ledAmarelo = Pin(17,Pin.OUT)
ledVerde = Pin(18,Pin.OUT)

while(True):
    ledVermelho.value(1)
    ledAmarelo.value(0)
    ledVerde.value(0)
    sleep(1)
    
    ledVermelho.value(0)
    ledAmarelo.value(1)
    ledVerde.value(0)
    sleep(1)
    
    ledVermelho.value(0)
    ledAmarelo.value(0)
    ledVerde.value(1)
    sleep(1)