# KI Norge - Proof of Concept

Dette er en proof-of-concept for en teknisk løsning for KI Norge-portalen, som bruker Astro, Deno og Enonic.

## Om prosjektet

Dette prosjektet demonstrerer en teknisk løsning for KI Norge-portalen med fokus på:

- Moderne webteknologi med Astro
- Serverside rendering med Deno
- CMS-integrasjon med Enonic
- Designsystem fra Digdir
- Flerspråklig støtte (bokmål, nynorsk, engelsk)

## Teknisk stack

Prosjektet er bygget med følgende teknologier:

- **[Astro](https://astro.build/)** - Et moderne rammeverk for nettsider med fokus på ytelse
- **[Deno](https://deno.land/)** - En sikker JavaScript/TypeScript runtime
- **[Enonic](https://enonic.com/)** - Headless CMS for innholdshåndtering
- **[Digdir Designsystem](https://designsystemet.no/)** - Felles designsystem for offentlig sektor

## Komme i gang

### Forutsetninger

- Node.js (v18 eller nyere)
- Deno (nyeste versjon)
- npm eller pnpm

### Installasjon

1. Klon repositoriet:
   ```bash
   git clone https://github.com/digdir/ki-norge.git
   cd ki-norge
   ```

2. Installer avhengigheter:
   ```bash
   npm install
   ```

3. Start utviklingsserveren:
   ```bash
   npm run dev
   ```

Nettsiden vil nå kjøre på `http://localhost:4321`.

## Bruk

### Redaktørsystem

Nettsiden har et integrert redaktørsystem for å håndtere innhold:

1. Gå til `/admin` for å få tilgang til admin-panelet
2. Herfra kan du administrere blogginnlegg, ressurser og suksesshistorier

### Bygg og deploy

For å bygge nettsiden for produksjon:

```bash
npm run build
```

Bygget blir generert i `dist/`-mappen.

## CI/CD

Prosjektet bruker GitHub Actions for kontinuerlig integrasjon og levering:

- **Build og Test**: Kjører på alle pull requests og push til main
- **Deploy**: Automatisk utrulling ved merge til main-branch

## Bidra

Vi setter pris på bidrag! Se gjerne på våre åpne issues eller opprett nye.

## Lisens

Dette prosjektet er lisensiert under [MIT-lisensen](LICENSE).
