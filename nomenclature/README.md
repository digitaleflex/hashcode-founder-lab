# Nomenclature HashCode Founder Lab

## Principes

### Les identifiants sont stables

Une fois attribué, un identifiant :

- ne change pas lorsque le nom change ;
- ne change pas lorsque le contenu évolue ;
- ne dépend pas d’une version ;
- ne doit pas être réutilisé pour un autre objet.

### Identité et version sont séparées

L’identifiant indique **quel objet** est consulté. La version indique **quelle évolution** de cet objet est utilisée.

### Hiérarchie pédagogique

```text
Programme
    ↓
Séance
    ↓
Notion
    ↓
Exercice
    ↓
Activité
    ↓
Livrable
    ↓
Évaluation
```

Les objets transverses, comme les feedbacks ou validations, utilisent des relations et métadonnées.

## Formats

| Objet | Format | Exemple |
|---|---|---|
| Programme | HFL-KDQ-01 | HFL-KDQ-01 |
| Séance | HFL-KDQ-01-S01 | HFL-KDQ-01-S01 |
| Notion | HFL-KDQ-01-S01-N01 | HFL-KDQ-01-S01-N01 |
| Exercice | HFL-KDQ-01-S01-EX01 | HFL-KDQ-01-S01-EX01 |
| Activité | HFL-KDQ-01-S01-ACT01 | HFL-KDQ-01-S01-ACT01 |
| Livrable | HFL-KDQ-01-LIV01 | HFL-KDQ-01-LIV01 |
| Évaluation | HFL-KDQ-01-S01-EVAL01 | HFL-KDQ-01-S01-EVAL01 |

## Registre officiel

Tout identifiant officiel doit être enregistré dans [registry.yml](registry.yml).

## Conventions

- Codes en majuscules.
- Séparateur : `-`.
- Numérotation locale sur deux chiffres lorsque nécessaire.
- Aucun espace dans un identifiant.
- Les noms de fichiers sont techniques et ne remplacent pas l’identifiant officiel.

## Métadonnées minimales

```yaml
id: HFL-KDQ-01-S01
type: session
name: Cadrage
parent: HFL-KDQ-01
version: v1.0
status: active
```

## Statuts

`draft` · `review` · `active` · `deprecated` · `archived`

## Baseline structurelle

La nomenclature s’applique **à l’intérieur de l’arborescence existante**. Elle ne crée pas une seconde architecture parallèle et ne permet pas de déplacer ou renommer les répertoires existants sans décision de gouvernance.
