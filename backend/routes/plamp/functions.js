import { db } from "../../firebase_setup.js";

export function addPlamp(user, name, res) {
  const ref = db.ref(`plamp/`).push();
  const newPlamp = {
    user: user, // owner of plamp
    name: name,
    batteryLevel: 100,
    batteryHistory: {
      [Date.now()]: 100,
    },
  };
  ref
    .set(newPlamp)
    .then(() => {
      res.status(200).send({ id: ref.key, plamp: newPlamp });
    })
    .catch((err) => {
      res.status(500).send({ err: "Server Error" });
      console.error(err);
    });
}

export function addBatteryLevel(id, batteryLevel, res) {
  const ref = db.ref(`plamp/${id}`);
  const batteryHistoryRef = ref.child(`/batteryHistory/${Date.now()}`);
  const currentBatteryRef = ref.child(`/batteryLevel`);

  batteryHistoryRef
    .set(batteryLevel)
    .then(() => {
      currentBatteryRef
        .set(batteryLevel)
        .then(() => {
          res.status(200).send({ msg: "Success!" });
        })
        .catch((err) => {
          res.status(500).send({ err: "Server Error" });
          console.error(err);
        });
    })
    .catch((err) => {
      res.status(500).send({ err: "Server Error" });
      console.error(err);
    });
}

export function changeName(id, name, res) {
  const ref = db.ref(`plamp/${id}`);
  ref
    .child("/name")
    .set(name)
    .then(res.status(200).send({ msg: "Success!" }))
    .catch((err) => {
      res.status(500).send({ err: "Server Error" });
      console.error(err);
    });
}

export function getPlamp(id, res) {
  db.ref(`plamp/${id}`)
    .get()
    .then((snapshot) => {
      if (snapshot.exists()) {
        res.status(200).send(snapshot.toJSON());
      } else {
        res.status(404).send({ err: "Not Found" });
      }
    })
    .catch((err) => {
      res.status(500).send({ err: "Server Error" });
      console.error(err);
    });
}
