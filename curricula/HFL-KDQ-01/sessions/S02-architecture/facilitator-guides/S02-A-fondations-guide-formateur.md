---
id: HFL-KDQ-01-S02-A-FG01
type: facilitator-guide
name: Guide formateur — S02-A Fondations de l'architecture documentaire
parent: HFL-KDQ-01-S02
version: v1.0
status: active
---

# S02-A — Fondations de l'architecture documentaire

## Guide officiel du formateur

## 1. Identification

| Élément | Valeur |
|---|---|
| Programme | HFL-KDQ-01 |
| Séance | S02 — Architecture de l'information |
| Sous-session | S02-A — Fondations |
| Public | Débutant / Junior |
| Durée recommandée | 2 h 15 |
| Format | Formation + démonstration + pratique |
| Notions | N01, N02, N03 |
| Missions GitHub | Issues #8, #9, début de #10 |

---

# 2. Objectif pédagogique

À la fin de S02-A, l'apprenant doit être capable de :

1. expliquer ce qu'est une architecture de l'information ;
2. distinguer une collection de fichiers d'un système organisé ;
3. construire une première taxonomie ;
4. comprendre la différence entre catégorie, hiérarchie et relation ;
5. proposer une arborescence simple et justifiée.

## Résultat attendu

L'apprenant doit produire des éléments concrets permettant d'avancer sur :

- Issue #8 — Diagnostic d'une mauvaise organisation documentaire ;
- Issue #9 — Construction d'une taxonomie ;
- Issue #10 — Première proposition d'arborescence.

---

# 3. Préparation du formateur

Avant la séance, vérifier :

- [ ] accès GitHub fonctionnel ;
- [ ] dépôt HashCode Founder Lab accessible ;
- [ ] Issues #8, #9 et #10 ouvertes ;
- [ ] cours N01, N02 et N03 disponibles ;
- [ ] environnement de rédaction prêt ;
- [ ] apprenant capable de créer/modifier un fichier Markdown ;
- [ ] mécanisme de partage d'écran disponible.

## Matériel pédagogique

Le formateur prépare un exemple volontairement désorganisé :

```
documents/
├── final/
├── important/
├── nouveau/
├── docs/
├── ancien/
└── divers/
```

Ne pas donner immédiatement la solution.

---

# 4. Déroulé minute par minute

## Phase 1 — Ouverture et connexion avec S01

**Durée : 10 minutes**

### Objectif

Reconnecter S02 au travail de cadrage.

### Script recommandé

> Lors de la première séance, nous avons défini le problème, le périmètre et les résultats attendus. Aujourd'hui, nous allons répondre à une nouvelle question : comment organiser l'information pour qu'elle soit réellement utilisable ?

### Questions

- Pourquoi les documents deviennent-ils difficiles à retrouver ?
- Est-ce qu'avoir beaucoup de dossiers signifie automatiquement être organisé ?
- Que se passe-t-il lorsqu'une équipe utilise des noms différents pour désigner la même chose ?

### Observation

Ne pas corriger immédiatement. Noter les raisonnements de l'apprenant.

---

# Phase 2 — N01 : Architecture de l'information

**Durée : 25 minutes**

## Message central

> Une collection de documents n'est pas automatiquement un système organisé.

## À enseigner

Une architecture de l'information définit :

- quelles informations existent ;
- comment elles sont regroupées ;
- comment elles sont nommées ;
- comment elles sont reliées ;
- comment elles sont retrouvées.

## Démonstration

Présenter deux organisations.

### Organisation A

```
final/
important/
nouveau/
divers/
```

### Organisation B

```
programme/
├── sessions/
├── exercises/
├── activities/
├── deliverables/
└── assessments/
```

Demander :

> Dans quelle structure chercherais-tu un exercice ?

Puis :

> Pourquoi ?

## Erreur à corriger

L'apprenant peut penser que « plus de dossiers » signifie « meilleure organisation ».

Insister :

> Une architecture efficace réduit la confusion. Elle n'augmente pas artificiellement le nombre de catégories.

---

# Phase 3 — Pratique N01

**Durée : 15 minutes**

Ouvrir **Issue #8**.

## Consigne

L'apprenant doit :

1. identifier cinq problèmes ;
2. expliquer leur impact ;
3. proposer une organisation alternative ;
4. justifier ses choix.

## Rôle du formateur

Ne pas écrire à sa place.

Utiliser des questions :

- Quel problème concret observes-tu ?
- Comment sais-tu que c'est un problème ?
- Pour qui est-ce difficile ?
- Ta solution réduit-elle réellement l'ambiguïté ?

---

# Phase 4 — N02 : Taxonomie et catégories

**Durée : 25 minutes**

## Message central

> Une taxonomie permet à plusieurs personnes de classer l'information selon les mêmes règles.

## À enseigner

### Catégorie

Un regroupement de contenus partageant une caractéristique utile.

### Taxonomie

Un vocabulaire organisé permettant de classer les contenus de manière cohérente.

## Cas pratique

Donner :

- syllabus ;
- notion ;
- exercice ;
- activité ;
- livrable ;
- évaluation ;
- ressource.

Demander :

> Comment éviter qu'une personne appelle ceci « cours » et une autre « document pédagogique » ?

Amener progressivement vers une nomenclature officielle.

## Règle pédagogique

Une catégorie doit être :

- compréhensible ;
- distincte ;
- utile ;
- applicable par une autre personne.

---

# Phase 5 — Pratique N02

**Durée : 20 minutes**

Ouvrir **Issue #9**.

## Production attendue

| Type | Définition | Exemple | Règle de classement |
|---|---|---|---|

### Questions de review

- Deux catégories peuvent-elles contenir le même élément ?
- Si oui, pourquoi ?
- Si non, quelle règle permet de décider ?
- Une nouvelle personne comprendrait-elle la classification ?

---

# Pause et synthèse

**Durée : 10 minutes**

Demander à l'apprenant d'expliquer avec ses propres mots :

1. Architecture de l'information.
2. Taxonomie.
3. Différence entre organisation et classification.

Si elle ne peut pas expliquer simplement, ne pas accélérer vers N03.

---

# Phase 6 — N03 : Arborescence et relations

**Durée : 25 minutes**

## Message central

> L'arborescence indique où se trouve un contenu. Elle n'explique pas nécessairement toutes ses relations.

## À enseigner

### Hiérarchie

Relation parent → enfant.

### Relation

Lien fonctionnel entre plusieurs contenus.

Exemple :

- une notion peut avoir plusieurs exercices ;
- un exercice peut contribuer à un livrable ;
- une évaluation peut mesurer plusieurs notions.

Ces relations ne doivent pas obligatoirement être représentées par une duplication de fichiers.

## Démonstration

Construire ensemble :

```
HFL-KDQ-01/
└── sessions/
    └── S02-architecture/
        ├── notions/
        ├── exercises/
        ├── activities/
        ├── deliverables/
        └── assessments/
```

Puis demander :

> Où placerais-tu une ressource utilisée par plusieurs notions ?

La réponse doit conduire à une réflexion, pas à une réponse automatique.

---

# Phase 7 — Pratique N03

**Durée : 15 minutes**

Ouvrir **Issue #10**.

## Mission

Produire une première arborescence avec :

- profondeur limitée ;
- catégories explicites ;
- absence de duplication inutile ;
- justification des décisions.

Cette issue peut être **commencée pendant la séance et terminée après**.

---

# 5. Critères d'observation du formateur

Pendant toute la séance, observer :

## Compréhension

- [ ] Explique les concepts avec ses propres mots.
- [ ] Ne répète pas seulement la définition du cours.

## Raisonnement

- [ ] Justifie ses décisions.
- [ ] Identifie les ambiguïtés.
- [ ] Pense aux utilisateurs.

## Production

- [ ] Structure claire.
- [ ] Nommage cohérent.
- [ ] Catégories compréhensibles.

## Autonomie

- [ ] Cherche une solution.
- [ ] Pose des questions précises.
- [ ] Intègre le feedback.

---

# 6. Méthode de feedback

Utiliser ce modèle :

## 1. Observation

> J'observe que...

## 2. Impact

> Cela peut provoquer...

## 3. Question

> Comment pourrais-tu améliorer cela ?

## 4. Recommandation

> Je te recommande de...

Ne pas commencer directement par :

> C'est faux.

L'objectif est de développer le raisonnement.

---

# 7. Clôture de séance

**Durée : 10 minutes**

Demander :

### Question 1

> Quelle notion est la plus claire pour toi ?

### Question 2

> Quelle notion reste difficile ?

### Question 3

> Quel problème réel cette méthode peut-elle résoudre chez HashCode ?

### Question 4

> Quelle décision prendrais-tu différemment maintenant concernant l'organisation d'un projet ?

---

# 8. Travail après la séance

## À terminer

- [ ] Issue #8 ;
- [ ] Issue #9 ;
- [ ] première proposition de l'Issue #10.

## Règle

L'apprenant ne cherche pas la perfection avant de soumettre son travail.

Workflow :

```
Première version
↓
Commit
↓
Pull Request
↓
Review
↓
Corrections
↓
Validation
```

---

# 9. Rapport post-séance du formateur

Après la séance, documenter :

## Compréhension générale

- Niveau observé :
- Points compris :
- Points confus :

## Difficultés

- Difficulté 1 :
- Difficulté 2 :

## Qualité du cours

- Partie trop complexe :
- Partie insuffisamment expliquée :
- Exemple à améliorer :

## Décisions

- Modification du cours :
- Exercice à améliorer :
- Prochaine séance :

---

# 10. Definition of Done — S02-A

La session est considérée comme terminée lorsque :

- [ ] N01 enseignée et pratiquée ;
- [ ] N02 enseignée et pratiquée ;
- [ ] N03 enseignée et introduite ;
- [ ] Issues #8 et #9 réalisées ou en review ;
- [ ] Issue #10 commencée ;
- [ ] feedback documenté ;
- [ ] difficultés de l'apprenant enregistrées ;
- [ ] améliorations pédagogiques identifiées.
