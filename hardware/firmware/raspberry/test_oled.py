
from luma.core.interface.serial import i2c, spi
from luma.core.render import canvas
from luma.oled.device import ssd1306
from PIL import ImageFont
import time
import os

VERSION = "v0.0.1" 

# substitute ssd1331(...) or sh1106(...) below if using that device
device1 = ssd1306(i2c(port=3, address=0x3C))
device2 = ssd1306(i2c(port=4, address=0x3C))
device3 = ssd1306(i2c(port=5, address=0x3C))
device4 = ssd1306(i2c(port=6, address=0x3C))
# device3 = ssd1306(i2c(port=4, address=0x3C))

def drawCenteredText(device, context, text, top=None, font=None):
    w, h = context.textsize(text=text, font=font)
    left = (device.width - w) / 2
    if top == None:
        top = (device.height - h) / 2
    context.text((left, top), text=text, font=font, fill="white")

fontAwesome = ImageFont.truetype(os.path.abspath(os.path.join(os.path.dirname(__file__), 'fonts', "fa-solid-900.ttf")), 30)

def drawSplashScreen(device):
    with canvas(device) as context:
        # draw.rectangle(device.bounding_box, outline="white", fill="black")
        # draw.text((30, 40), "Hallo Bernd!", fill="white")
        drawCenteredText(device, context, "\uf0eb", font=fontAwesome, top=10)
        drawCenteredText(device, context, "AGLight", top=50)
        context.text((device.width - context.textsize(text=VERSION)[0], 0), text=VERSION, fill="white")

drawSplashScreen(device1)
drawSplashScreen(device2)
drawSplashScreen(device3)
drawSplashScreen(device4)
time.sleep(100)