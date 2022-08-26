# Esspotify
Repositório do projeto de ESS


## Entidades envolvidas no projeto

### Artista

| property   |  type  | required |
|------------|:------:|----------|
| id         |  uuid  | *auto    |
| name       | string | *        |
| image_link | string | *        |
| country    | string | *        |
| style      | string |          |
| albums     | [id]   |          |

### Álbum

| property   |  type  | required |
|------------|:------:|----------|
| id         |  uuid  | *auto    |
| name       | string | *        |
| image_link | string | *        |
| year       | number | *        |
| musics     |  [id]  | *        |

### Música

| **property**   | **type** | **required** |
|----------------|:--------:|--------------|
| id             | uuid     | *auto        |
| name           | string   | *            |
| writers        | [string] | *            |
| link           | string   | *            |
| participations | [string] |              |
| release        | date     |              |
