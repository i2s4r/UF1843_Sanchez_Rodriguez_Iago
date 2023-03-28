import './style.css'

document.querySelector('#app').innerHTML = `
    <form>
      <h1> Formulario de contacto </h1>
      <fieldset id="hablemos">
        <legend>Hablemos...</legend>
        <span>Nombre</span><input type="text" id="input-name" placeholder="Su nombre"><label class="ob" for="input-name">Campo obligatorio</label><br>
        <span>Dirección</span><input type="text" id="input-dir" placeholder="Su ndirección"><br>
        <span>Correo electrónico</span><input type="email" id="input-mail" placeholder="Su Email"><label class="ob" for="input-mail">Campo obligatorio</label><br>
        <span>Asunto</span><input type="text" id="input-sub" placeholder="Motivo de contacto"><label class="ob" for="input-sub">Campo obligatorio</label><br>
        <span>Mensaje</span><textarea  rows="8" cols="40" id="msg" placeholder="Su mensaje"></textarea><label class="ob" for="msg">Campo obligatorio</label><br>
      </fieldset>
      <fieldset>
        <legend>Otros datos</legend>
        <strong>Cómo contacto por nosotros?</strong>
        <div class="check-group">
          <input type="checkbox" id="checkweb"><label for="checkweb">Web</label>
          <input type="checkbox" id="checkam"><label for="checkam">Amigos</label>
          <input type="checkbox" id="checkpre"><label for="checkpre">Prensa</label>
          <input type="checkbox" id="checkot"><label for="checkot">Otros</label><br>
        </div>
        <strong>Es usted español?</strong>
        <div class="radio-group">
          <input type="radio" id="radiosi"><label for="radiosi">Si</label>
          <input type="radio" id="radiono"><label for="radiono">No</label><br>
        </div>
        <strong>Sus intereses?</strong>
        <select id="select" size="4" multiple>
          <option value="deportes">Deportes</option>
          <option value="naturaleza">Naturaleza</option>
          <option value="informatica">Informática</option>
          <option value="cine">Cine</option>
        </select>
      </fieldset>
      <input type="submit" value="ENVIAR" id="btn-enviar">
    </form>
    
`

