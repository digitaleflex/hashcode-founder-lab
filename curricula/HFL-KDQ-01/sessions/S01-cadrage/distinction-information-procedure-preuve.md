# 🧩 Distinguer Information, Procédure et Preuve.

> **Contexte** : Exemple pédagogique pour la séance 01 de HFL-KDQ-01.
> **Objectif** : Apprendre à distinguer ces 3 typologies de connaissances (p.12 du [cours](curricula/HFL-KDQ-01/sessions/S01-cadrage/HFL-KDQ-01_S01_Cadrage.docx)) pour mieux organiser la documentation Hashcode.
> **Public cible** : Nouveaux membres (débutants).

---


## 1. Pour illustrer (3 par catégorie)

### 📄 INFORMATIONS
*Répond à "Quoi ?" — Permet de comprendre.*

- **Exemple 1** : "HashCode utilise WathsApp comme outil de communication principal."
  - *Justification* : C'est un fait brut, une connaissance déclarative. Cela ne demande aucune action immédiate, mais permet de comprendre l'environnement de travail.
- **Exemple 2** : "La branche `main` du dépôt GitHub est protégée et nécessite une revue de code avant toute fusion."
  - *Justification* : C'est une règle organisationnelle. Elle informe sur le fonctionnement de l'équipe, mais ne dit pas *comment* faire la revue.
- **Exemple 3** : "Maitriser Github est une compétence de base chez Hashcode"
  - *Justification* : C'est une donnée brute, une information pure. Elle permet de savoir, , mais n'explique pas ce qu'il y a autour.

### ⚙️ PROCÉDURES
*Répond à "Comment ?" — Permet d'agir.*

- **Exemple 4** : "Pour configurer ton environnement local : 1. Cloner le dépôt, 2. Installer les dépendances avec `npm install`, 3. Lancer le serveur avec `npm run dev`."
  - *Justification* : C'est une suite d'étapes ordonnées qui guide l'action concrète pour atteindre un résultat (avoir le projet qui tourne sur sa machine).
- **Exemple 5** : "Pour signaler un bug : 1. Aller sur Jira, 2. Créer un ticket, 3. Ajouter les captures d'écran et les étapes de reproduction."
  - *Justification* : C'est un mode opératoire. La procédure guide l'utilisateur pour effectuer une tâche spécifique (déclarer un bug).
- **Exemple 6** : "Pour demander une revue de code : 1. Ouvrir une Pull Request, 2. Assigner un relecteur, 3. Ajouter le label `needs-review`."
  - *Justification* : C'est une procédure technique. Elle explique *comment* interagir avec l'outil (GitHub) pour obtenir une validation.

### ✅ PREUVES
*Répond à "Comment le démontrer ?" — Permet de vérifier.*

- **Exemple 7** : "Une capture d'écran du terminal montrant que les tests unitaires sont passés au vert (0 erreur)."
  - *Justification* : C'est une preuve visuelle et vérifiable qu'une action (les tests) a été réalisée avec succès. Cela rassure le validateur.
- **Exemple 8** : "Le lien vers la Pull Request #42 sur GitHub, fusionnée par le Lead Tech."
  - *Justification* : C'est une preuve traçable. Elle démontre que le code a été intégré et validé par une personne habilitée.
- **Exemple 9** : "Un message de validation de ton mentor sur Slack disant : 'J'ai vérifié ta checklist d'onboarding, tout est bon.'"
  - *Justification* : C'est une preuve sociale et temporelle. Elle atteste qu'une étape (l'onboarding) a été franchie et validée par un tiers.

---

## 2. 3 Exemples Volontairement Ambigus

> *Ces exemples sont conçus pour faire réfléchir et provoquer la discussion.*

### 🌀 Ambigu 1 : "Le guide d'installation de Docker pour HashCode."
- **Pourquoi c'est ambigu** : Le mot "guide" fait penser à de l'Information (un document qui explique). Mais s'il contient des commandes à taper, c'est une Procédure.
- **Explication du mauvais classement** : Un débutant pourrait le ranger dans "Information" parce que c'est un PDF ou une page web statique. Or, s'il ne le suit pas pas-à-pas (Procédure), il ne pourra pas installer Docker. La nature du contenu (actionnable) doit primer sur le format (document).

### 🌀 Ambigu 2 : "Le rapport de test QA indiquant que la fonctionnalité X est validée."
- **Pourquoi c'est ambigu** : C'est un document (Information) qui contient un résultat (Preuve).
- **Explication du mauvais classement** : On pourrait le classer en "Information" car il décrit un état des lieux. Mais sa fonction première est de servir de **Preuve** pour le chef de projet afin de valider la recette. S'il est mal classé, l'équipe risque de ne pas le retrouver au moment de prouver que la fonctionnalité a été testée.

### 🌀 Ambigu 3 : "Un tutoriel vidéo montrant comment déployer l'application."
- **Pourquoi c'est ambigu** : C'est un média (Information) qui montre une action (Procédure).
- **Explication du mauvais classement** : Un apprenant peut le consommer passivement comme une Information (regarder la vidéo). Mais pour qu'il soit efficace, il doit être utilisé comme une Procédure (mettre en pause et reproduire les étapes). Le risque est de le classer comme "Ressource" alors qu'il est un "Mode opératoire" déguisé.

---

> **Critère d'acceptation** : Utilisable dans une séance avec un débutant.

---
*Fait par Essenam P. Joanice ALOTCHO | Documentation & Knowledge Management Lead Hashcode*