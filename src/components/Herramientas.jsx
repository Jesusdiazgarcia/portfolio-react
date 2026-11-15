import conocimientos from '../data/conocimientos.json'

const Herramientas = () => {
  return (
    <section className="section" id="herramientas" aria-labelledby="herramientas-h">
      <div className="wrap section__in">
        <div className="section__head">
          <h2 id="herramientas-h">Herramientas de desarrollo</h2>
          <p>
            Las ocho con las que trabajo hoy, con el nivel que les doy después de usarlas en
            proyectos.
          </p>
        </div>

        <div className="tools__grid">
          <ul className="tools">
            {conocimientos.map((herramienta) => (
              <li className="tool" key={herramienta.id}>
                <span
                  className="tool__name"
                  style={{ backgroundImage: `url(${herramienta.icon})` }}
                >
                  {herramienta.name}
                </span>
                <span className="tool__use">{herramienta.uso}</span>
                <span className="tool__level">{herramienta.nivel}</span>
              </li>
            ))}
          </ul>

          <div className="ui ui-editor tools__panel" data-ui="editor" aria-hidden="true">
            <div className="ui-editor__bar">
              <span className="ui-editor__file">Ficha.jsx</span>
              <span className="ui-editor__tag">React</span>
            </div>

            <pre className="ui-editor__code">
              <span className="code__line"><i>1</i><code><span className="tok-key">const</span> Ficha = ({'{'} datos {'}'}) =&gt; (</code></span>
              <span className="code__line"><i>2</i><code>  &lt;<span className="tok-tag">section</span> <span className="tok-attr">className</span>=<span className="tok-str">"ficha"</span>&gt;</code></span>
              <span className="code__line"><i>3</i><code>    &lt;<span className="tok-tag">h2</span>&gt;{'{'}datos.nombre{'}'}&lt;/<span className="tok-tag">h2</span>&gt;</code></span>
              <span className="code__line"><i>4</i><code>    &lt;<span className="tok-tag">p</span>&gt;{'{'}datos.resumen{'}'}&lt;/<span className="tok-tag">p</span>&gt;</code></span>
              <span className="code__line"><i>5</i><code>    &lt;<span className="tok-tag">Tags</span> <span className="tok-attr">items</span>=<span className="tok-str">{'{'}datos.stack{'}'}</span> /&gt;</code></span>
              <span className="code__line"><i>6</i><code>    &lt;<span className="tok-fn">Accion</span> <span className="tok-attr">href</span>=<span className="tok-str">"/ficha"</span>&gt;</code></span>
              <span className="code__line"><i>7</i><code>      Ver ficha</code></span>
              <span className="code__line"><i>8</i><code>    &lt;/<span className="tok-fn">Accion</span>&gt;</code></span>
              <span className="code__line"><i>9</i><code>  &lt;/<span className="tok-tag">section</span>&gt;</code></span>
              <span className="code__line"><i>10</i><code>)</code></span>
            </pre>

            <div className="ui-editor__preview">
              <span className="preview__eyebrow">Proyecto</span>
              <span className="preview__title">Ficha de proyecto</span>
              <span className="preview__line" />
              <span className="preview__line preview__line--short" />
              <span className="preview__tags"><i /><i /><i /></span>
              <span className="preview__btn">Ver ficha</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Herramientas
