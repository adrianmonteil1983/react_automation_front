# REACT AUTOMATION

* Front-end of react automation using react to create reusable
dashboard and components for smart home and smart buildings.

* MQTT is used to communicate with the back-end.

* The back-end communicate through low level socket with the arduino.

* Here a little architecture explanation:


*     hosted on netlify             mosquitto.com                  local network
*                      ---------------- MQTT ------------>            ---- SOCKET---->arduino
*          REACT                                                 NODE       
*                      <--------------- MQTT -------------            --MONGO-CLIENT---->docker(mongoDB)

* [Link to the backend repository](https://github.com/adrianmonteil1983/react_automation_back) 