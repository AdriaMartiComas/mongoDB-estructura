
db.createCollection('proveidors', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'proveidors',
        required: ['nom', 'adreca', 'telefon', 'fax', 'nif'],
        properties: {
          nom: {
            bsonType: 'string'
          },
          adreca: {
            bsonType: 'objectId'
          },
          telefon: {
            bsonType: 'int'
          },
          fax: {
            bsonType: 'string'
          },
          nif: {
            bsonType: 'string'
          }
        }
      }
    }
  });
  db.createCollection('ulleres', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'ulleres',
        required: ['marca', 'graduacio', 'tipusMuntura', 'colorMuntura', 'colorVidre', 'preu'],
        properties: {
          marca: {
            bsonType: 'objectId'
          },
          graduacio: {
            bsonType: 'object',
            title: 'object',
            required: ['graduacioDreta', 'graduacioEsquerre'],
            properties: {
              graduacioDreta: {
                bsonType: 'decimal'
              },
              graduacioEsquerre: {
                bsonType: 'decimal'
              }
            }
          },
          tipusMuntura: {
            bsonType: 'string'
          },
          colorMuntura: {
            bsonType: 'string'
          },
          colorVidre: {
            bsonType: 'object',
            title: 'object',
            required: ['vidreDreta', 'vidreEsquerre'],
            properties: {
              vidreDreta: {
                bsonType: 'string'
              },
              vidreEsquerre: {
                bsonType: 'string'
              }
            }
          },
          preu: {
            bsonType: 'string'
          }
        }
      }
    }
  });
  db.createCollection('clients', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'clients',
        required: ['nom', 'adreca', 'telefon', 'mail', 'dataRegistre'],
        properties: {
          nom: {
            bsonType: 'string'
          },
          adreca: {
            bsonType: 'objectId'
          },
          telefon: {
            bsonType: 'int'
          },
          mail: {
            bsonType: 'string'
          },
          dataRegistre: {
            bsonType: 'date'
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
        required: ['carrer', 'numero', 'pis', 'porta', 'codiPostal', 'ciutat', 'pais'],
        properties: {
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
          codiPostal: {
            bsonType: 'string'
          },
          ciutat: {
            bsonType: 'string'
          },
          pais: {
            bsonType: 'string'
          }
        }
      }
    }
  });
  db.createCollection('ventes', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'ventes',
        required: ['empleat', 'ulleres', 'clients'],
        properties: {
          empleat: {
            bsonType: 'object',
            title: 'object',
            required: ['nom', 'nif'],
            properties: {
              nom: {
                bsonType: 'string'
              },
              nif: {
                bsonType: 'string'
              }
            }
          },
          ulleres: {
            bsonType: 'objectId'
          },
          clients: {
            bsonType: 'objectId'
          }
        }
      }
    }
  });
  db.createCollection('marques', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'marques',
        required: ['nom', 'proveidor'],
        properties: {
          nom: {
            bsonType: 'string'
          },
          proveidor: {
            bsonType: 'objectId'
          }
        }
      }
    }
  });

  