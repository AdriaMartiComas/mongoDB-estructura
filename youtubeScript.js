db.createCollection('usuaris', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'usuaris',
        required: ['email', 'password', 'nom', 'dataNeixement', 'sexe', 'pais', 'codiPostal', 'subscripcionsCanals'],
        properties: {
          email: {
            bsonType: 'string'
          },
          password: {
            bsonType: 'string'
          },
          nom: {
            bsonType: 'string'
          },
          dataNeixement: {
            bsonType: 'date'
          },
          sexe: {
            enum: masculi,
            femeni
          },
          pais: {
            bsonType: 'string'
          },
          codiPostal: {
            bsonType: 'string'
          },
          subscripcionsCanals: {
            bsonType: 'objectId'
          }
        }
      }
    }
  });

  db.createCollection('videos', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'videos',
        required: ['titol', 'descripcio', 'grandaria', 'nomArxiuVideo', 'duradaVideo', 'thumbnail', 'nReproducions', 'nLikes', 'nDislikes', 'etiquetes', 'publicatPerUsuari', 'dataHoraPublicacio', 'likedDyslikedByUser'],
        properties: {
          titol: {
            bsonType: 'string'
          },
          descripcio: {
            bsonType: 'string'
          },
          grandaria: {
            bsonType: 'int'
          },
          nomArxiuVideo: {
            bsonType: 'string'
          },
          duradaVideo: {
            bsonType: 'timestamp'
          },
          thumbnail: {
            bsonType: 'string'
          },
          nReproducions: {
            bsonType: 'int'
          },
          nLikes: {
            bsonType: 'int'
          },
          nDislikes: {
            bsonType: 'int'
          },
          estat: {
            enum: public,
            ocult,
            privat
          },
          etiquetes: {
            bsonType: 'array',
            items: {
              title: 'object',
              required: ['nom'],
              properties: {
                nom: {
                  bsonType: 'string'
                }
              }
            }
          },
          publicatPerUsuari: {
            bsonType: 'objectId'
          },
          dataHoraPublicacio: {
            bsonType: 'timestamp'
          },
          likedDyslikedByUser: {
            bsonType: 'array',
            items: {
              title: 'object',
              required: ['timeStamp'],
              properties: {
                timeStamp: {
                  bsonType: 'timestamp'
                }
              }
            }
          },
          comentaris: {
            bsonType: 'array',
            items: {
              title: 'object',
              required: ['text', 'timeStamp', 'nomUsuariAutor', 'nLikes', 'nDislikes'],
              properties: {
                text: {
                  bsonType: 'string'
                },
                timeStamp: {
                  bsonType: 'timestamp'
                },
                nomUsuariAutor: {
                  bsonType: 'string'
                },
                likes: {
                  bsonType: 'array',
                  items: {
                    title: 'object',
                    properties: {
                      likedByUsuari: {
                        bsonType: 'string'
                      },
                      likeOrDislike: {
                        enum: like,
                        dislike
                      },
                      timestamp: {
                        bsonType: 'string'
                      }
                    }
                  }
                },
                nLikes: {
                  bsonType: 'int'
                },
                nDislikes: {
                  bsonType: 'int'
                }
              }
            }
          }
        }
      }
    }
  });

  db.createCollection('canals', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'canals',
        required: ['nom', 'dataCreacio', 'creatPerUsuari'],
        properties: {
          nom: {
            bsonType: 'string'
          },
          descripcio: {
            bsonType: 'string'
          },
          dataCreacio: {
            bsonType: 'timestamp'
          },
          creatPerUsuari: {
            bsonType: 'objectId'
          }
        }
      }
    }
  });

  db.createCollection('playlists', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'playlists',
        required: ['nom', 'dataPublicacio', 'estat', 'titolVideosLlista', 'creatPer'],
        properties: {
          nom: {
            bsonType: 'string'
          },
          dataPublicacio: {
            bsonType: 'timestamp'
          },
          estat: {
            enum: publica,
            privada
          },
          titolVideosLlista: {
            bsonType: 'array',
            items: {
              bsonType: 'string'
            }
          },
          creatPer: {
            bsonType: 'objectId'
          }
        }
      }
    }
  });
