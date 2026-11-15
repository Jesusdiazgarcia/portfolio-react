const STATEMENT =
  'Cada proyecto es una oportunidad para crecer: leo, pregunto y pruebo hasta que la interfaz funciona para quien la usa.'

const principios = [
  {
    titulo: 'Contenido',
    texto: 'Primero la información y su jerarquía; el estilo viene después.',
  },
  {
    titulo: 'Detalle',
    texto: 'Espaciado, tipografía y estados de foco cuidados en cada pantalla.',
  },
  {
    titulo: 'Pruebas',
    texto: 'Reviso en pantallas pequeñas, con teclado y sin animaciones.',
  },
]

const Perfil = () => {
  return (
    <section className="section" id="perfil" data-moment="word-highlight" aria-labelledby="perfil-h">
      <div className="wrap section__in">
        <h2 id="perfil-h" className="mo-wh__text perfil__statement">
          Método: <strong>interfaces</strong> que se entienden y se prueban
        </h2>

        <div className="perfil__foot">
          <p className="section__lead">{STATEMENT}</p>

          <dl className="principles">
            {principios.map((principio) => (
              <div key={principio.titulo}>
                <dt>{principio.titulo}</dt>
                <dd>{principio.texto}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default Perfil
