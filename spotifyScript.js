db.createCollection('usuaris', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'usuaris',
        required: ['email', 'password', 'nomUsuari', 'dataNeixement', 'sexe', 'pais', 'codiPostal', 'tipusSubscripcio'],
        properties: {
          email: {
            bsonType: 'string'
          },
          password: {
            bsonType: 'string'
          },
          nomUsuari: {
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
          tipusSubscripcio: {
            enum: premium,
            freemium
          },
          subscripcioPremium: {
            bsonType: 'object',
            title: 'object',
            required: ['IniciSubscripcio', 'renovacioSubscripcio', 'metodePagament', 'pagaments'],
            properties: {
              IniciSubscripcio: {
                bsonType: 'timestamp'
              },
              renovacioSubscripcio: {
                bsonType: 'timestamp'
              },
              metodePagament: {
                enum: targeta,
                paypal
              },
              targeta: {
                bsonType: 'object',
                title: 'object',
                required: ['numeroTageta', 'caducitatTargeta', 'codiSeguretat'],
                properties: {
                  numeroTageta: {
                    bsonType: 'long'
                  },
                  caducitatTargeta: {
                    bsonType: 'date'
                  },
                  codiSeguretat: {
                    bsonType: 'int'
                  }
                }
              },
              paypalNomUsuari: {
                bsonType: 'string'
              },
              pagaments: {
                bsonType: 'array',
                items: {
                  title: 'object',
                  required: ['numOrdre', 'data', 'total'],
                  properties: {
                    numOrdre: {
                      bsonType: 'timestamp'
                    },
                    data: {
                      bsonType: 'timestamp'
                    },
                    total: {
                      bsonType: 'decimal'
                    }
                  }
                }
              }
            }
          },
          artistesSeguits: {
            bsonType: 'array',
            items: {
              bsonType: 'string'
            }
          },
          albumsFavorits: {
            bsonType: 'array',
            items: {
              bsonType: 'string'
            }
          },
          can??onsFavorites: {
            bsonType: 'array',
            items: {
              bsonType: 'string'
            }
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
        required: ['titol', 'estat', 'tipusPlaylist', 'nCan??ons', 'dataCreacio', 'creatPerUsuari', 'can??ons'],
        properties: {
          titol: {
            bsonType: 'string'
          },
          estat: {
            bsonType: 'object',
            title: 'object',
            required: ['tipusEstat'],
            properties: {
              tipusEstat: {
                enum: activa,
                eliminada
              },
              dataEliminacio: {
                bsonType: 'timestamp'
              }
            }
          },
          tipusPlaylist: {
            bsonType: 'object',
            title: 'object',
            properties: {
              privadesa: {
                enum: publica,
                compartida
              },
              UsuariAfegeixCan??o: {
                bsonType: 'array',
                items: {
                  title: 'object',
                  required: ['nomUsuari', 'can??oAfegida', 'timeStamp'],
                  properties: {
                    nomUsuari: {
                      bsonType: 'string'
                    },
                    can??oAfegida: {
                      bsonType: 'string'
                    },
                    timeStamp: {
                      bsonType: 'timestamp'
                    }
                  }
                }
              }
            }
          },
          nCan??ons: {
            bsonType: 'string'
          },
          dataCreacio: {
            bsonType: 'timestamp'
          },
          creatPerUsuari: {
            bsonType: 'objectId'
          },
          can??ons: {
            bsonType: 'array',
            items: {
              bsonType: 'string'
            }
          }
        }
      }
    }
  });

  db.createCollection('artista', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'artista',
        required: ['nom', 'imgArtistaUrl', 'Albums'],
        properties: {
          nom: {
            bsonType: 'string'
          },
          imgArtistaUrl: {
            bsonType: 'string'
          },
          Albums: {
            bsonType: 'array',
            items: {
              title: 'object',
              required: ['nomAlbum', 'anyPublicacio', 'imgPortadaUrl', 'can??ons'],
              properties: {
                nomAlbum: {
                  bsonType: 'string'
                },
                anyPublicacio: {
                  bsonType: 'date'
                },
                imgPortadaUrl: {
                  bsonType: 'string'
                },
                can??ons: {
                  bsonType: 'array',
                  items: {
                    title: 'object',
                    required: ['titolCan??o', 'durada', 'reproduccions'],
                    properties: {
                      titolCan??o: {
                        bsonType: 'string'
                      },
                      durada: {
                        bsonType: 'int'
                      },
                      reproduccions: {
                        bsonType: 'int'
                      }
                    }
                  }
                }
              }
            }
          },
          artistesSimilars: {
            bsonType: 'array',
            items: {
              bsonType: 'objectId'
            }
          }
        }
      }
    }
  });

