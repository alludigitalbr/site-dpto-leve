import s from './landing.module.css'

// Notebook com a plataforma na tela. Com `screenshot` (captura real em
// /public) a imagem entra na tela; sem ela, uma ilustração esquemática com o
// menu real da plataforma e linhas genéricas, sem dados inventados.
const MENU = ['Painel de Negócios', 'Oportunidades', 'Análise de Edital', 'Declarações', 'Tutoriais']
const ASSISTENTES = ['Impugnação', 'Esclarecimento', 'Recurso']

export function DeviceMockup({ screenshot }: { screenshot?: string }) {
  return (
    <div className={s.laptop}>
      <div className={s.laptopLid}>
        <div className={s.laptopScreen}>
          {screenshot ? (
            // eslint-disable-next-line @next/next/no-img-element -- captura estática em /public
            <img src={screenshot} alt="Tela da plataforma Departamento Leve" className={s.laptopShot} />
          ) : (
            <div className={s.ui} role="img" aria-label="Ilustração da plataforma Departamento Leve com o menu de oportunidades, análise de edital, declarações e assistentes de IA">
              <aside className={s.uiSide} aria-hidden="true">
                <p className={s.uiBrand}>
                  Depto <span>Leve</span>
                </p>
                <p className={s.uiGroup}>Principal</p>
                {MENU.map((m, i) => (
                  <p key={m} className={`${s.uiItem} ${i === 1 ? s.uiItemOn : ''}`}>
                    {m}
                  </p>
                ))}
                <p className={s.uiGroup}>Assistentes IA</p>
                {ASSISTENTES.map((m) => (
                  <p key={m} className={s.uiItem}>
                    {m}
                  </p>
                ))}
              </aside>
              <div className={s.uiMain} aria-hidden="true">
                <div className={s.uiTop}>
                  <span className={s.uiSearch} />
                  <span className={s.uiAvatar} />
                </div>
                <p className={s.uiTitle}>Oportunidades para sua empresa</p>
                <div className={s.uiCols}>
                  <div className={s.uiList}>
                    {[78, 64, 84, 58, 70].map((w, i) => (
                      <div key={i} className={s.uiRow}>
                        <span className={s.uiRowIcon} />
                        <span className={s.uiRowText}>
                          <span style={{ width: `${w}%` }} />
                          <span style={{ width: `${w - 24}%` }} />
                        </span>
                        <span className={s.uiPill} />
                      </div>
                    ))}
                  </div>
                  <div className={s.uiPanel}>
                    <p className={s.uiPanelTitle}>Análise do edital</p>
                    {[88, 72, 80, 60, 76, 52].map((w, i) => (
                      <span key={i} className={`${s.uiLine} ${i === 2 || i === 4 ? s.uiLineHi : ''}`} style={{ width: `${w}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={s.laptopBase} aria-hidden="true" />
    </div>
  )
}
