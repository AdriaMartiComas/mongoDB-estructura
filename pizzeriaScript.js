
db.createCollection('clients', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'clients',
        required: ['nom', 'cognom', 'adreca', 'telefon', 'comandes'],
        properties: {
          nom: {
            bsonType: 'string'
          },
          cognom: {
            bsonType: 'string'
          },
          adreca: {
            bsonType: 'objectId'
          },
          telefon: {
            bsonType: 'int'
          },
          comandes: {
            bsonType: 'objectId'
          }
        }
      }
    }
  });
  db.createCollection('adreces', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'adreces',
        required: ['CP', 'ciutat', 'provincia', 'carrer', 'numero', 'pis', 'porta', 'clients_adreca'],
        properties: {
          CP: {
            bsonType: 'string'
          },
          ciutat: {
            bsonType: 'string'
          },
          provincia: {
            bsonType: 'string'
          },
          carrer: {
            bsonType: 'string'
          },
          numero: {
            bsonType: 'int'
          },
          pis: {
            bsonType: 'string'
          },
          porta: {
            bsonType: 'string'
          },
          clients_adreca: {
            bsonType: 'objectId'
          }
        }
      }
    }
  });
  db.createCollection('productes', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'productes',
        required: ['nom', 'descripcio', 'imatgeURL', 'preu', 'categoria'],
        properties: {
          nom: {
            bsonType: 'string'
          },
          descripcio: {
            bsonType: 'string'
          },
          imatgeURL: {
            bsonType: 'string'
          },
          preu: {
            bsonType: 'decimal'
          },
          categoria: {
            bsonType: 'object',
            title: 'object',
            required: ['nom'],
            properties: {
              nom: {
                bsonType: 'string'
              },
              subCategoriaPizza: {
                bsonType: 'string'
              }
            }
          }
        }
      }
    }
  });
  db.createCollection('empleats', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'empleats',
        properties: {
          nom: {
            bsonType: 'string'
          },
          cognoms: {
            bsonType: 'string'
          },
          nif: {
            bsonType: 'string'
          },
          telefon: {
            bsonType: 'int'
          }
        }
      }
    }
  });
  db.createCollection('botigues', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'botigues',
        required: ['adreca', 'comandes', 'empleats'],
        properties: {
          adreca: {
            bsonType: 'objectId'
          },
          comandes: {
            bsonType: 'objectId'
          },
          empleats: {
            bsonType: 'objectId'
          }
        }
      }
    }
  });
  db.createCollection('comandes', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'comandes',
        required: ['timeStamp', 'tipusComanda'],
        properties: {
          timeStamp: {
            bsonType: 'date'
          },
          tipusComanda: {
            enum: domicili,
            botiga
          },
          comandesDomicili: {
            bsonType: 'objectId'
          }
        }
      }
    }
  });
  db.createCollection('detall', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'detall',
        required: ['quantitat', 'comandes', 'productes'],
        properties: {
          quantitat: {
            bsonType: 'int'
          },
          comandes: {
            bsonType: 'objectId'
          },
          productes: {
            bsonType: 'objectId'
          }
        }
      }
    }
  });
  db.createCollection('comandesDomicili', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'comandesDomicili',
        required: ['timeStamp', 'empleat'],
        properties: {
          timeStamp: {
            bsonType: 'timestamp'
          },
          empleat: {
            bsonType: 'objectId'
          }
        }
      }
    }
  });

  