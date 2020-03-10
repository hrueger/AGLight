/*
  Images generated using https://javl.github.io/image2cpp/
*/

#include <SPI.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64

#define LOGO_WIDTH 128
#define LOGO_HEIGHT 64

#define SOFTWARE_ID "AGLC"
#define SOFTWARE_VERSION "v1"
#define DELIMITER "________"
#define READY_TO_CONNECT "ready_to_connect"
#define CONNECTED "connected"

const byte DATA_MAX_SIZE = 32;
char incomingMessage[DATA_MAX_SIZE];

static const unsigned char PROGMEM logo_bmp[] =
    {0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
     0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
     0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
     0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
     0xff, 0xff, 0xff, 0xe0, 0x1f, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
     0xff, 0xff, 0xff, 0x0f, 0xc3, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
     0xff, 0xff, 0xfc, 0x7f, 0xf8, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
     0xff, 0xff, 0xf9, 0xff, 0xfe, 0x7f, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
     0xff, 0xff, 0xf7, 0xff, 0xff, 0xbf, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
     0xff, 0xff, 0xef, 0xff, 0xff, 0xdf, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
     0xff, 0xff, 0xdf, 0xff, 0xff, 0xef, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
     0xff, 0xff, 0x9f, 0xfe, 0xff, 0xe7, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
     0xff, 0xff, 0x3e, 0xfe, 0xff, 0xf3, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
     0xff, 0xff, 0x7e, 0x7e, 0xfe, 0x7b, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
     0xff, 0xfe, 0x7f, 0x7e, 0xfc, 0xf9, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
     0xff, 0xfe, 0xff, 0x3f, 0xf9, 0xfd, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
     0xff, 0xfe, 0xff, 0xf0, 0x19, 0xfd, 0xff, 0xfc, 0x7f, 0x81, 0xe7, 0xf9, 0xff, 0xe7, 0xfd, 0xff,
     0xff, 0xfc, 0xcf, 0xc7, 0x8f, 0xfc, 0xff, 0xfc, 0x7e, 0x00, 0xe7, 0xf9, 0xff, 0xe7, 0xf9, 0xff,
     0xff, 0xfd, 0xe7, 0xcf, 0xe7, 0xee, 0xff, 0xf9, 0x3e, 0x7c, 0x67, 0xff, 0xff, 0xe7, 0xf9, 0xff,
     0xff, 0xfd, 0xf3, 0xbf, 0xfb, 0xce, 0xff, 0xf9, 0x3c, 0x7e, 0xe7, 0xf9, 0xe2, 0x64, 0x30, 0x7f,
     0xff, 0xfd, 0xff, 0x7f, 0xf9, 0x9e, 0xff, 0xf9, 0x3c, 0xff, 0xe7, 0xf9, 0xc0, 0x60, 0x10, 0x7f,
     0xff, 0xfd, 0xfe, 0x7f, 0xfd, 0xbe, 0xff, 0xf3, 0x9c, 0xff, 0xe7, 0xf9, 0x8c, 0x63, 0x99, 0xff,
     0xff, 0xfd, 0xfe, 0x7f, 0xfc, 0xfe, 0xff, 0xf3, 0x9c, 0xf0, 0x67, 0xf9, 0x9e, 0x67, 0x99, 0xff,
     0xff, 0xfd, 0xfe, 0x7f, 0xfc, 0xfe, 0xff, 0xf0, 0x1c, 0xf0, 0x67, 0xf9, 0x9e, 0x67, 0x99, 0xff,
     0xff, 0xfd, 0xfe, 0x7f, 0xfc, 0xfe, 0xff, 0xe0, 0x0c, 0x7e, 0x67, 0xf9, 0x9e, 0x67, 0x99, 0xff,
     0xff, 0xfd, 0xfe, 0x7f, 0xfd, 0xfe, 0xff, 0xe7, 0xce, 0x7c, 0x67, 0xf9, 0x8c, 0x67, 0x99, 0xff,
     0xff, 0xfd, 0xff, 0x7f, 0xf9, 0xfe, 0xff, 0xe7, 0xce, 0x00, 0x60, 0x19, 0xc0, 0x67, 0x98, 0x7f,
     0xff, 0xfd, 0xff, 0x7f, 0xf9, 0xfe, 0xff, 0xcf, 0xe7, 0x81, 0xe0, 0x19, 0xe2, 0x67, 0x9c, 0x7f,
     0xff, 0xfd, 0xff, 0x3f, 0xfb, 0xfe, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x9e, 0x7f, 0xff, 0xff,
     0xff, 0xfd, 0xff, 0xbf, 0xf3, 0xfe, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x80, 0x7f, 0xff, 0xff,
     0xff, 0xfd, 0xff, 0xbf, 0xf3, 0xfe, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xc0, 0xff, 0xff, 0xff,
     0xff, 0xfd, 0xff, 0xdf, 0xf7, 0xfe, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
     0xff, 0xfd, 0xff, 0xdf, 0xe7, 0xfe, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
     0xff, 0xf0, 0x1f, 0xcf, 0xef, 0xfe, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
     0xff, 0xc7, 0xc7, 0xef, 0xef, 0xfe, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
     0xff, 0x9f, 0xf3, 0xef, 0xdf, 0xfe, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
     0xff, 0x7f, 0xfd, 0xe7, 0xdf, 0xfe, 0xff, 0xfc, 0x7f, 0x81, 0xe7, 0xff, 0x07, 0xff, 0xff, 0xcf,
     0xfe, 0xff, 0xfe, 0xf0, 0x1f, 0xfe, 0xff, 0xfc, 0x7e, 0x00, 0xe7, 0xfc, 0x03, 0xff, 0xff, 0x8f,
     0xfc, 0xf9, 0xfe, 0x71, 0xbf, 0xfe, 0xff, 0xf9, 0x3e, 0x7c, 0x67, 0xfc, 0xf1, 0xff, 0xff, 0x0f,
     0xfd, 0xf9, 0xff, 0x73, 0xbf, 0xfe, 0xff, 0xf9, 0x3c, 0x7e, 0xe7, 0xf8, 0xfb, 0xfc, 0xe6, 0x4f,
     0xf9, 0xf9, 0xff, 0x33, 0xbf, 0xfe, 0xff, 0xf9, 0x3c, 0xff, 0xe7, 0xf9, 0xff, 0xfc, 0xe6, 0xcf,
     0xfb, 0xf9, 0xff, 0xb3, 0xbf, 0xfe, 0xff, 0xf3, 0x9c, 0xff, 0xe7, 0xf9, 0xff, 0xfc, 0xe7, 0xcf,
     0xfb, 0xf9, 0xff, 0xb3, 0xbf, 0xfe, 0xff, 0xf3, 0x9c, 0xf0, 0x67, 0xf9, 0xff, 0xfe, 0x4f, 0xcf,
     0xfb, 0xf9, 0xff, 0xb3, 0xbf, 0xfe, 0xff, 0xf0, 0x1c, 0xf0, 0x67, 0xf9, 0xff, 0xfe, 0x4f, 0xcf,
     0xfb, 0xf9, 0xff, 0xb3, 0xbf, 0xfe, 0xff, 0xe0, 0x0c, 0x7e, 0x67, 0xf8, 0xfb, 0xfe, 0x4f, 0xcf,
     0xfb, 0xf9, 0xff, 0xb3, 0xbf, 0xfe, 0xff, 0xe7, 0xce, 0x7c, 0x67, 0xfc, 0xf1, 0xff, 0x1f, 0xcf,
     0xf9, 0xf9, 0xff, 0x33, 0xbf, 0xfe, 0xff, 0xe7, 0xce, 0x00, 0x60, 0x1c, 0x03, 0xff, 0x1f, 0xcf,
     0xfd, 0xf8, 0x07, 0x78, 0x3f, 0xfc, 0xff, 0xcf, 0xe7, 0x81, 0xe0, 0x1f, 0x07, 0xff, 0x1f, 0xcf,
     0xfc, 0xf8, 0x06, 0x7c, 0x7f, 0xfd, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
     0xfe, 0xff, 0xfe, 0xff, 0xff, 0xfd, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
     0xff, 0x7f, 0xfd, 0xff, 0xff, 0xf9, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
     0xff, 0x9f, 0xf3, 0xff, 0xff, 0xfb, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
     0xff, 0xc7, 0xc7, 0xff, 0xff, 0xf3, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
     0xff, 0xf0, 0x1f, 0xff, 0xff, 0xe7, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
     0xff, 0xff, 0xdf, 0xff, 0xff, 0xef, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
     0xff, 0xff, 0xef, 0xff, 0xff, 0xdf, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
     0xff, 0xff, 0xf7, 0xff, 0xff, 0xbf, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
     0xff, 0xff, 0xf9, 0xff, 0xfe, 0x7f, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
     0xff, 0xff, 0xfc, 0x7f, 0xf8, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
     0xff, 0xff, 0xff, 0x0f, 0xc3, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
     0xff, 0xff, 0xff, 0xe0, 0x1f, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
     0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
     0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
     0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff};

Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, -1);

void setup()
{
  Serial.begin(115200);

  if (!display.begin(SSD1306_SWITCHCAPVCC, 0x3C))
  {
    Serial.println(F("SSD1306 allocation failed"));
    for (;;)
      ;
  }
  analogReadResolution(12);
  analogSetAttenuation(ADC_11db);

  displayLogo();
  connect();
}

void loop()
{
  display.clearDisplay();
  display.setCursor(0, 0);
  display.setTextSize(1);
  display.println(F("Connected"));
  display.println("This will be the");
  display.println("info screen here.");
  display.display();
  delay(5000);
}

void displayLogo(void)
{
  display.clearDisplay();

  display.drawBitmap(
      (display.width() - LOGO_WIDTH) / 2,
      (display.height() - LOGO_HEIGHT) / 2,
      logo_bmp, LOGO_WIDTH, LOGO_HEIGHT, 1);
  display.display();
  delay(2000);
  display.clearDisplay();
}
void connect()
{
  while (true) {

    if (checkIfConnected()) {
      return;
    }

    display.clearDisplay();
    display.setTextSize(2);
    display.setTextColor(WHITE);
    display.setCursor(0, 0);

    display.println(F("Connecting"));
    display.println("");
    display.setTextColor(BLACK, WHITE);
    display.display();
    for (int i = 0; i < 10; i++) {
      display.print(F(" "));
      display.display();
      delay(100);
    }

    Serial.println(SOFTWARE_ID DELIMITER SOFTWARE_VERSION DELIMITER READY_TO_CONNECT);

    for (int i = 0; i < 10; i++) {
      display.clearDisplay();
      display.setCursor(0, 0);
      display.setTextColor(WHITE, BLACK);
      display.println(F("Connecting"));
      display.println("");
      for (int j = 0; j < i; j++) {
        display.print(F(" "));
      }
      display.setTextColor(BLACK, WHITE);
      for (int j = 0; j < 10 - i; j++) {
        display.print(F(" "));
      }
      display.display();
      delay(100);
    }
  }

  display.display();
  delay(2000);
}

void receiveData() {
  Serial.println("Checking for data");
  static char endMarker = '\n';
  char receivedChar;
  int ndx = 0;
  memset(incomingMessage, 32, sizeof(incomingMessage));
  while (Serial.available() > 0) {
    receivedChar = Serial.read();
    if (receivedChar == endMarker) {
      incomingMessage[ndx] = '\0';
      return;
    }
    incomingMessage[ndx] = receivedChar;
    ndx++;
    if (ndx >= DATA_MAX_SIZE) {
      Serial.print("error" DELIMITER "incomplete message" DELIMITER);
      Serial.println(incomingMessage);
      memset(incomingMessage, 32, sizeof(incomingMessage));
    }
  }
}

bool checkIfConnected() {
  receiveData();
  String m = incomingMessage;
  return m == CONNECTED;
}