import conocimientos from '../data/conocimientos.json'

const Herramientas = () => {
  return (
    <section className="section" id="herramientas" aria-labelledby="herramientas-h">
      <div className="wrap section__in">
        <div className="board-head">
          <span className="board-head__index">04 — Stack</span>
          <h2 id="herramientas-h">Herramientas de desarrollo</h2>
          <p>
            De Node y Express a React: las diez con las que trabajo, de la base de datos a la
            interfaz.
          </p>
        </div>

        <div className="tools__board">
          <article className="tile tools__tile">
            <span className="tile__label">
              Diez en uso <span aria-hidden="true">01—10</span>
            </span>
            <ul className="tools">
              {conocimientos.map((herramienta) => (
                <li className={herramienta.wide ? 'tool tool--wide' : 'tool'} key={herramienta.id}>
                  <span className="tool__name">
                    <img
                      className={herramienta.wide ? 'tool__icon tool__icon--wide' : 'tool__icon'}
                      src={herramienta.icon}
                      alt=""
                      width="24"
                      height="24"
                      loading="lazy"
                    />
                    {herramienta.wide ? (
                      <span className="sr-only">{herramienta.name}</span>
                    ) : (
                      herramienta.name
                    )}
                  </span>
                  <span className="tool__use">{herramienta.uso}</span>
                </li>
              ))}
            </ul>
          </article>

          <div className="tools__col">
            <div className="tile ui-editor tools__editor" data-ui="editor" aria-hidden="true">
              <div className="ui-editor__bar">
              <span className="ui-editor__file">server.js</span>
              <span className="ui-editor__tag">Express</span>
            </div>

            <pre className="ui-editor__code">
              <span className="code__line"><i>1</i><code><span className="tok-key">const</span> express = <span className="tok-fn">require</span>(<span className="tok-str">'express'</span>)</code></span>
              <span className="code__line"><i>2</i><code><span className="tok-key">const</span> db = <span className="tok-fn">require</span>(<span className="tok-str">'./db'</span>)</code></span>
              <span className="code__line"><i>3</i><code><span className="tok-key">const</span> app = <span className="tok-fn">express</span>()</code></span>
              <span className="code__line"><i>4</i><code>app.<span className="tok-fn">use</span>(express.<span className="tok-fn">json</span>())</code></span>
              <span className="code__line"><i>5</i><code> </code></span>
              <span className="code__line"><i>6</i><code>app.<span className="tok-fn">get</span>(<span className="tok-str">'/api/proyectos'</span>, <span className="tok-key">async</span> (req, res) =&gt; {'{'}</code></span>
              <span className="code__line"><i>7</i><code>  <span className="tok-key">const</span> [filas] = <span className="tok-key">await</span> db.<span className="tok-fn">query</span>(</code></span>
              <span className="code__line"><i>8</i><code>    <span className="tok-str">'SELECT id, titulo, estado FROM proyectos'</span></code></span>
              <span className="code__line"><i>9</i><code>  )</code></span>
              <span className="code__line"><i>10</i><code>  res.<span className="tok-fn">json</span>(filas)</code></span>
              <span className="code__line"><i>11</i><code>{'}'})</code></span>
              <span className="code__line"><i>12</i><code> </code></span>
              <span className="code__line"><i>13</i><code>app.<span className="tok-fn">post</span>(<span className="tok-str">'/api/proyectos'</span>, <span className="tok-key">async</span> (req, res) =&gt; {'{'}</code></span>
              <span className="code__line"><i>14</i><code>  <span className="tok-key">const</span> {'{'} titulo, estado {'}'} = req.body</code></span>
              <span className="code__line"><i>15</i><code>  <span className="tok-key">const</span> [r] = <span className="tok-key">await</span> db.<span className="tok-fn">query</span>(</code></span>
              <span className="code__line"><i>16</i><code>    <span className="tok-str">'INSERT INTO proyectos SET ?'</span>,</code></span>
              <span className="code__line"><i>17</i><code>    {'{'} titulo, estado {'}'}</code></span>
              <span className="code__line"><i>18</i><code>  )</code></span>
              <span className="code__line"><i>19</i><code>  res.<span className="tok-fn">status</span>(<span className="tok-fn">201</span>).<span className="tok-fn">json</span>({'{'} id: r.insertId {'}'})</code></span>
              <span className="code__line"><i>20</i><code>{'}'})</code></span>
            </pre>

            <div className="ui-editor__preview ui-editor__preview--api">
              <span className="preview__eyebrow">Proyectos.jsx · consumo del endpoint</span>
              <span className="preview__status">GET /api/proyectos · 200 OK</span>
              <ul className="preview__json">
                <li className="preview__json-row"><span className="tok-key">const</span> [lista, setLista] = <span className="tok-fn">useState</span>([])</li>
                <li className="preview__json-row"> </li>
                <li className="preview__json-row"><span className="tok-key">useEffect</span>(() =&gt; {'{'}</li>
                <li className="preview__json-row">{'  '}<span className="tok-fn">fetch</span>(<span className="tok-str">'/api/proyectos'</span>)</li>
                <li className="preview__json-row">{'    '}.<span className="tok-fn">then</span>((r) =&gt; r.<span className="tok-fn">json</span>())</li>
                <li className="preview__json-row">{'    '}.<span className="tok-fn">then</span>(setLista)</li>
                <li className="preview__json-row">{'}'}, [])</li>
              </ul>
            </div>
          </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Herramientas
