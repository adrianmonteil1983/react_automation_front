# Heading 1 REACT AUTOMATION

* Front-end of react automation using react to create reusable
dashboard and components for smart home and smart buildings.

* MQTT is used to communicate with the back-end and the hardware.

* Here a little architecture explanation:


            (hosted on netlify)      (mosquitto.com)        (local network)
FRONT END:         REACT ---------------- MQTT ------------> NODE.js -------->arduino
                         <--------------- MQTT -------------         -------->docker(mongoDB)

* [Backend](https://github.com/adrianmonteil1983/react_automation_back) 