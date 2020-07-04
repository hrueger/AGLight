
from luma.core.interface.serial import i2c, spi
from luma.core.render import canvas
from luma.oled.device import ssd1306
from PIL import ImageFont
import time
import os
import smbus

class multiplex:
    
    def __init__(self, bus):
        self.bus = smbus.SMBus(bus)

    def channel(self, address,channel):  # values 0-7 indictae the channel, anything else (eg -1) turns off all channels
        
        if   (channel==0): action = 0x01
        elif (channel==1): action = 0x02
        elif (channel==2): action = 0x04
        elif (channel==3): action = 0x08
        elif (channel==4): action = 0x10
        elif (channel==5): action = 0x20
        elif (channel==6): action = 0x40
        elif (channel==7): action = 0x80
        else : action = 0x00

        self.bus.write_byte_data(address,0x04,action)  #0x04 is the register for switching channels 


bus=1       # 0 for rev1 boards etc.
address=0x70

plexer = multiplex(bus)
plexer.channel(address,1)







VERSION = "v0.0.1" 

serial = i2c(port=1, address=0x3C)

# substitute ssd1331(...) or sh1106(...) below if using that device
device = ssd1306(serial)

def drawCenteredText(context, text, top=None, font=None):
    w, h = context.textsize(text=text, font=font)
    left = (device.width - w) / 2
    if top == None:
        top = (device.height - h) / 2
    context.text((left, top), text=text, font=font, fill="white")

fontAwesome = ImageFont.truetype(os.path.abspath(os.path.join(os.path.dirname(__file__), 'fonts', "fa-solid-900.ttf")), 30)

with canvas(device) as context:
    # draw.rectangle(device.bounding_box, outline="white", fill="black")
    # draw.text((30, 40), "Hallo Bernd!", fill="white")
    drawCenteredText(context, "\uf0eb", font=fontAwesome, top=10)
    drawCenteredText(context, "AGLight", top=50)
    context.text((device.width - context.textsize(text=VERSION)[0], 0), text=VERSION, fill="white")
    
time.sleep(100)