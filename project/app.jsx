// Main app composition + Tweaks

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "default",
  "accent": "#E8B829"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useReveal();

  React.useEffect(() => {
    if (t.palette === 'default') {
      document.documentElement.removeAttribute('data-palette');
    } else {
      document.documentElement.setAttribute('data-palette', t.palette);
    }
  }, [t.palette]);

  React.useEffect(() => {
    if (t.palette === 'default' && t.accent) {
      document.documentElement.style.setProperty('--accent', t.accent);
    } else {
      document.documentElement.style.removeProperty('--accent');
    }
  }, [t.accent, t.palette]);

  return (
    <React.Fragment>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <VideoSection />
        <QueEs />
        <Presentations />
        <ComoFunciona />
        <Applications />
        <Evidence />
        <ProZone />
        <FAQ />
        <Contact />
      </main>
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Paleta">
          <TweakRadio
            label="Modo"
            value={t.palette}
            onChange={(v) => setTweak('palette', v)}
            options={[
              { value: 'default', label: 'Claro' },
              { value: 'ink', label: 'Oscuro' },
            ]}
          />
          {t.palette === 'default' && (
            <TweakColor
              label="Acento"
              value={t.accent}
              onChange={(v) => setTweak('accent', v)}
              options={['#E8B829', '#F2C530', '#D4A017', '#FFD835', '#0A0A09']}
            />
          )}
        </TweakSection>
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
