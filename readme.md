# Next.js Notion Starter Kit

> Le kit de démarrage parfait pour créer des sites web avec Next.js et Notion.

[![Build Status](https://github.com/SlendyMilky/nextjs-notion-website/actions/workflows/production.yml/badge.svg)](https://github.com/SlendyMilky/nextjs-notion-website/actions/workflows/production.yml) [![Prettier Code Formatting](https://img.shields.io/badge/code_style-prettier-brightgreen.svg)](https://prettier.io)

## Introduction

Ce dépôt est utilisé pour alimenter mon blog personnel et mon site portfolio [transitivebullsh.it](https://transitivebullsh.it).

Il utilise Notion comme CMS, [react-notion-x](https://github.com/NotionX/react-notion-x), [Next.js](https://nextjs.org/), et [Vercel](https://vercel.com).

## Fonctionnalités

- Configuration en quelques minutes ([fichier de configuration unique](./site.config.ts)) 💪
- Support robuste pour le contenu Notion via [react-notion-x](https://github.com/NotionX/react-notion-x)
- Construit avec Next.js, TypeScript, et React
- Excellente vitesse de chargement des pages
- Aperçus d'images fluides
- Images sociales automatiques
- URLs jolies automatiques
- Table des matières automatique
- Support complet du mode sombre
- Recherche rapide via CMD+K / CMD+P
- Responsive pour différents appareils
- Optimisé pour Next.js et Vercel

## Configuration

**Toute la configuration est définie dans [site.config.ts](./site.config.ts).**

Ce projet nécessite une version récente de Node.js (nous recommandons >= 16).

1. Fork / clone ce dépôt
2. Changez quelques valeurs dans [site.config.ts](./site.config.ts)
3. `npm install`
4. `npm run dev` pour tester localement
5. `npm run deploy` pour déployer sur Vercel 💪

Nous avons essayé de rendre la configuration aussi simple que possible — Tout ce que vous avez vraiment besoin de faire pour commencer est de modifier `rootNotionPageId`.

Nous recommandons de dupliquer la [page par défaut](https://notion.so/7875426197cf461698809def95960ebf) comme point de départ, mais vous pouvez utiliser n'importe quelle page publique Notion que vous souhaitez.

Assurez-vous que votre page Notion racine est **publique** puis copiez le lien dans votre presse-papiers. Extrayez la dernière partie de l'URL qui ressemble à `7875426197cf461698809def95960ebf`, qui est l'ID Notion de votre page.

Pour trouver l'ID de votre espace de travail Notion (optionnel), chargez simplement n'importe quelle page de votre site dans votre navigateur et ouvrez la console développeur. Il y aura une variable globale appelée `block` qui est les données Notion pour la page actuelle. Si vous entrez `block.space_id`, cela affichera l'ID de votre espace de travail.

Nous recommandons de configurer une collection sur votre page d'accueil qui contient tous vos articles / projets / contenus. Il n'y a pas de contraintes structurelles sur votre espace de travail Notion, donc n'hésitez pas à ajouter du contenu comme vous le feriez normalement dans Notion.

## Chemins URL

L'application utilise par défaut des chemins URL légèrement différents en dev et en prod (bien que coller n'importe quel chemin dev dans prod fonctionnera et vice-versa).

En développement, elle utilisera `/nextjs-notion-blog-d1b5dcf8b9ff425b8aef5ce6f0730202` qui est une version slugifiée du titre de la page suffixée par son ID Notion. J'ai trouvé qu'il est vraiment utile d'avoir toujours l'ID de la page Notion bien en vue pendant le développement local.

En production, elle utilisera `/nextjs-notion-blog` qui est un peu plus propre car il se débarrasse de l'encombrement supplémentaire de l'ID.

La correspondance de l'ID Notion aux titres de pages slugifiés est effectuée automatiquement dans le cadre du processus de build. Gardez simplement à l'esprit que si vous prévoyez de changer les titres de pages au fil du temps, vous voudrez probablement vous assurer que les anciens liens fonctionneront toujours, et nous ne fournissons actuellement pas de solution pour détecter les anciens liens à part le [support intégré de Next.js pour les redirections](https://nextjs.org/docs/api-reference/next.config.js/redirects).

Voir [mapPageUrl](./lib/map-page-url.ts) et [getCanonicalPageId](https://github.com/NotionX/react-notion-x/blob/master/packages/notion-utils/src/get-canonical-page-id.ts) pour plus de détails.

Vous pouvez remplacer la génération de slug par défaut sur une base par page en ajoutant une propriété texte `Slug` à votre base de données. Toute page ayant une propriété `Slug` utilisera cela comme son slug.

NOTE : si vous avez plusieurs pages dans votre espace de travail avec le même nom slugifié, l'application renverra une erreur vous informant qu'il y a des doublons de chemins URL.

## Images d'Aperçu

<p align="center">
  <img alt="Example preview image" src="https://user-images.githubusercontent.com/552829/160142320-35343317-aa9e-4710-bcf7-67e5cdec586d.gif" width="458">
</p>

Nous utilisons [next/image](https://nextjs.org/docs/api-reference/next/image) pour servir les images efficacement, avec des images d'aperçu générées en option via [lqip-modern](https://github.com/transitive-bullshit/lqip-modern). Cela nous donne un support d'image extrêmement optimisé pour des images fluides et sexy.

Les images d'aperçu sont **activées par défaut**, mais elles peuvent être lentes à générer, donc si vous voulez les désactiver, définissez `isPreviewImageSupportEnabled` à `false` dans `site.config.ts`.

### Redis

Si vous souhaitez mettre en cache les images d'aperçu générées pour accélérer les builds suivants, vous devrez d'abord configurer un magasin de données externe [Redis](https://redis.io). Pour activer la mise en cache redis, définissez `isRedisEnabled` à `true` dans `site.config.ts` puis définissez les variables d'environnement `REDIS_HOST` et `REDIS_PASSWORD` pour pointer vers votre instance redis.

Vous pouvez le faire localement en ajoutant un fichier `.env` :

```bash
REDIS_HOST='TODO'
REDIS_PASSWORD='TODO'
```

Si vous ne savez pas quel fournisseur Redis utiliser, nous recommandons [Redis Labs](https://redis.com), qui propose un plan gratuit.

Notez que les images d'aperçu et la mise en cache redis sont des fonctionnalités optionnelles. Si vous préférez ne pas les utiliser, désactivez-les simplement dans votre configuration de site.

## Styles

Tous les styles CSS qui personnalisent le contenu Notion sont situés dans [styles/notion.css](./styles/notion.css). Ils ciblent principalement les classes CSS globales exportées par [react-notion-x styles.css](https://github.com/NotionX/react-notion-x/blob/master/packages/react-notion-x/src/styles.css).

Chaque bloc notion obtient sa propre classe unique, vous pouvez donc cibler des blocs individuels comme ceci :

```css
.notion-block-260baa77f1e1428b97fb14ac99c7c385 {
  display: none;
}
```

## Mode Sombre

<p align="center">
  <img alt="Light Mode" src="https://transitive-bs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F83ea9f0f-4761-4c0b-b53e-1913627975fc%2Ftransitivebullsh.it_-opt.jpg?table=block&id=ed7e8f60-c6d1-449e-840b-5c7762505c44&spaceId=fde5ac74-eea3-4527-8f00-4482710e1af3&width=2000&userId=&cache=v2" width="45%">
&nbsp; &nbsp; &nbsp; &nbsp;
  <img alt="Dark Mode" src="https://transitive-bs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc0839d6c-7141-48df-8afd-69b27fed84aa%2Ftransitivebullsh.it__(1)-opt.jpg?table=block&id=23b11fe5-d6df-422d-9674-39cf7f547523&spaceId=fde5ac74-eea3-4527-8f00-4482710e1af3&width=2000&userId=&cache=v2" width="45%">
</p>

Le mode sombre est entièrement pris en charge et peut être activé via l'icône soleil / lune dans le pied de page.

## Images Sociales Automatiques

<p align="center">
  <img alt="Example social image" src="https://user-images.githubusercontent.com/552829/162001133-34d4cf24-123a-4569-a540-f683b22830d1.jpeg" width="600">
</p>

Toutes les balises Open Graph et les méta tags sociaux sont générés à partir de votre contenu Notion, ce qui rend le partage social professionnel par défaut.

Les images sociales sont générées automatiquement en utilisant [Vercel OG Image Generation](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation). Vous pouvez ajuster le modèle React par défaut pour les images sociales en éditant [api/social-images.tsx](./pages/api/social-image.tsx).

Vous pouvez voir un exemple d'image sociale en direct en production [ici](https://transitivebullsh.it/api/social-image?id=dfc7f709-ae3e-42c6-9292-f6543d5586f0).

## Table des Matières Automatique

<p align="center">
  <img alt="Smooth ToC Scrollspy" src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fcb2df62d-9028-440b-964b-117711450921%2Ftoc2.gif?table=block&id=d7e9951b-289c-4ff2-8b82-b0a61fe260b1&cache=v2" width="240">
</p>

Par défaut, chaque page d'article aura une table des matières affichée comme un `aside` sur le bureau. Elle utilise la logique **scrollspy** pour mettre à jour automatiquement la section actuelle lorsque l'utilisateur fait défiler votre document, et facilite grandement la navigation entre les différentes sections.

Si une page a moins de `minTableOfContentsItems` (par défaut 3), la table des matières sera cachée. Elle est également cachée sur la page d'index et si la fenêtre du navigateur est trop petite.

Cette table des matières utilise la même logique que Notion utilise pour son bloc Table des Matières intégré (voir [getPageTableOfContents](https://github.com/NotionX/react-notion-x/blob/master/packages/notion-utils/src/get-page-table-of-contents.ts) pour la logique sous-jacente).

## Réactivité

<p align="center">
  <img alt="Mobile article page" src="https://user-images.githubusercontent.com/552829/160132983-c2dd5830-80b3-4a0e-a8f1-abab5dbeed11.jpg" width="300">
</p>

Toutes les pages sont conçues pour être responsives sur les tailles d'appareils courantes.

## Analytics

Les analyses sont une fonctionnalité optionnelle facile à activer si vous le souhaitez.

### Fathom Analytics

[Fathom](https://usefathom.com/ref/42TFOZ) fournit une alternative légère à Google Analytics.

Pour activer, ajoutez simplement une variable d'environnement `NEXT_PUBLIC_FATHOM_ID`, qui ne sera utilisée qu'en production.

### PostHog Analytics

[PostHog](https://posthog.com/) fournit une alternative légère et **open source** à Google Analytics.

Pour activer, ajoutez simplement une variable d'environnement `NEXT_PUBLIC_POSTHOG_ID`, qui ne sera utilisée qu'en production.

## Variables d'Environnement

Si vous utilisez Redis, des analyses, ou toute autre fonctionnalité nécessitant des variables d'environnement, vous devrez [les ajouter à votre projet Vercel](https://vercel.com/docs/concepts/projects/environment-variables).

Si vous souhaitez tester vos builds redis avec GitHub Actions, vous devrez éditer l'[action de build par défaut](./.github/workflows/build.yml) pour ajouter `REDIS_HOST` et `REDIS_PASSWORD`. Voici un [exemple de ma branche personnelle](https://github.com/SlendyMilky/yannsolliard.ch/blob/transitive-bullshit/.github/workflows/build.yml#L17-L21). Vous devrez également ajouter ces variables d'environnement à votre dépôt GitHub en tant que [secrets de dépôt](https://docs.github.com/en/actions/security-guides/encrypted-secrets).

## License

MIT © [Travis Fischer](https://transitivebullsh.it)

Soutenez son travail open source en <a href="https://twitter.com/transitive_bs">suivant son twitter <img src="https://storage.googleapis.com/saasify-assets/twitter-logo.svg" alt="twitter" height="24px" align="center"></a>
