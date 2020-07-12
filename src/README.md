# REACT AUTOMATION

* Front-end of react automation using react to create reusable
dashboard and components for smart home and smart buildings.

* MQTT is used to communicate with the back-end and the hardware.

* Here a little architecture explanation:


*         (hosted on netlify)         (mosquitto.com)       (local network)
*                         ---------------- MQTT ------------>         ---- SOCKET---->arduino
* FRONT END:         REACT                                      NODE        
*                         <--------------- MQTT -------------         --MONGO-CLIENT---->docker(mongoDB)

* [Backend](https://github.com/adrianmonteil1983/react_automation_back) 