import Joi from 'joi';

export default {
  diveNumber: Joi.number()
    .integer()
    .positive()
    .allow(null),
  diveTime: Joi.object()
    .keys({
      diveLength: Joi.number()
        .integer()
        .positive()
        .max(4000)
        .required(),
      surfaceInterval: Joi.number()
        .integer()
        .positive()
        .allow(null),
      bottomTime: Joi.number()
        .integer()
        .positive()
        .max(Joi.ref('diveLength'))
        .allow(null),
      decoStops: Joi.array()
        .items(
          Joi.object().keys({
            depth: Joi.number()
              .positive()
              .allow(null),
            duration: Joi.number()
              .positive()
              .allow(null),
          }),
        )
        .max(10),
    })
    .required(),

  location: Joi.string()
    .max(250)
    .required(),
  site: Joi.string()
    .max(250)
    .required(),
  gps: Joi.object()
    .keys({
      latitude: Joi.string()
        .max(100)
        .allow(null),
      longitude: Joi.string()
        .max(100)
        .allow(null),
    })
    .allow(null),

  cylinders: Joi.array()
    .items(
      Joi.object().keys({
        gas: Joi.object()
          .keys({
            o2Percent: Joi.number()
              .min(1)
              .max(100)
              .allow(null),
            hePercent: Joi.number()
              .min(0)
              .max(99)
              .allow(null),
            startPressure: Joi.number()
              .positive()
              .max(5000)
              .allow(null),
            endPressure: Joi.when(Joi.ref('startPressure'), {
              is: Joi.valid(null),
              then: Joi.number()
                .min(0)
                .max(5000)
                .allow(null),
              otherwise: Joi.number()
                .min(0)
                .less(Joi.ref('startPressure'))
                .allow(null),
            }),
          })
          .allow(null),
        volume: Joi.number()
          .positive()
          .max(200)
          .allow(null),
        type: Joi.string().valid([null, 'aluminum', 'steel']),
        number: Joi.number()
          .integer()
          .positive()
          .max(10)
          .allow(null),
      }),
    )
    .max(10)
    .allow(null),

  depth: Joi.object()
    .keys({
      average: Joi.number()
        .positive()
        .max(Joi.ref('max'))
        .allow(null),
      max: Joi.number()
        .positive()
        .max(1000)
        .required(),
    })
    .required(),

  temperature: Joi.object()
    .keys({
      surface: Joi.number()
        .min(-76.0)
        .max(150.0)
        .allow(null),
      water: Joi.number()
        .min(30.0)
        .max(150.0)
        .allow(null),
      thermocline1: Joi.number()
        .min(30.0)
        .max(150.0)
        .allow(null),
      thermocline2: Joi.number()
        .min(30.0)
        .max(150.0)
        .allow(null),
    })
    .allow(null),

  exposure: Joi.object()
    .keys({
      body: Joi.string().valid([null, 'none', 'shorty', 'full', 'dry']),
      thickness: Joi.number()
        .integer()
        .min(1)
        .max(10)
        .allow(null),
      gloves: Joi.boolean().allow(null),
      hood: Joi.boolean().allow(null),
      boots: Joi.boolean().allow(null),
    })
    .allow(null),

  equipment: Joi.object()
    .keys({
      compass: Joi.boolean().allow(null),
      computer: Joi.boolean().allow(null),
      knife: Joi.boolean().allow(null),
      light: Joi.boolean().allow(null),
      scooter: Joi.boolean().allow(null),
      slate: Joi.boolean().allow(null),
      surfaceMarker: Joi.boolean().allow(null),
    })
    .allow(null),

  diveType: Joi.object()
    .keys({
      altitude: Joi.boolean().allow(null),
      boat: Joi.boolean().allow(null),
      cave: Joi.boolean().allow(null),
      deep: Joi.boolean().allow(null),
      drift: Joi.boolean().allow(null),
      ice: Joi.boolean().allow(null),
      night: Joi.boolean().allow(null),
      reef: Joi.boolean().allow(null),
      saltWater: Joi.boolean().allow(null),
      searchAndRecovery: Joi.boolean().allow(null),
      training: Joi.boolean().allow(null),
      wreck: Joi.boolean().allow(null),
    })
    .allow(null),

  visibility: Joi.string().valid([null, 'none', 'poor', 'moderate', 'good', 'excellent', 'ultra']),
  current: Joi.string().valid([null, 'none', 'mild', 'moderate', 'fast', 'extreme']),
  surfaceConditions: Joi.string().valid([null, 'calm', 'moderate', 'rough', 'insane']),
  weather: Joi.string().valid([null, 'sunny', 'mainlySunny', 'overcast', 'rainy', 'stormy']),
  mood: Joi.string().valid([null, 'terrible', 'bad', 'ok', 'good', 'excellent']),

  weight: Joi.object()
    .keys({
      amount: Joi.number()
        .positive()
        .max(100)
        .allow(null),
      correctness: Joi.string().valid([null, 'too little', 'good', 'too much']),
    })
    .allow(null),

  notes: Joi.string()
    .max(1500)
    .allow(null),
};
