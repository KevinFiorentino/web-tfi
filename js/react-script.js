class FormPronostico extends React.Component {
    render() {
        return (
			<div id="form-pronostico">
				<input class="form-control input-react" type="text" name="buscarCiudad" placeholder="Ingrese una ciudad" />
				<button class="btn btn-success btn-react">Consultar</button>
				<div class="error-ciudad">
					<p>Error</p>
				</div>					
			</div>
        )
    } 
}

class PronosticoHoy extends React.Component {
    render() {
        return (
			<div class="pronostico-hoy">
				<p>{this.props.ciudad}</p>
				<img class="img-pronostico" src="{this.props.icon}" />
				<p>{this.props.temp}°</p>
				<p>{this.props.descrip}</p>	
			</div>	
        )
    } 
}

class PronosticoInfo extends React.Component {
    render() {
        return (
			<div class="pronostico-info">
				<p>{this.props.fecha}</p>
				<div class="row">
					<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
						<div class="info-clima">
							<p>Min°/Max°:</p>
							<p>{this.props.min}°/{this.props.max}°</p>
						</div>
					</div>
					<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
						<div class="info-clima">
							<p>Alba/Ocaso:</p>
							<p>{this.props.sunrise}/{this.props.sunset}</p>
						</div>
					</div>
				</div>
				<p><strong>Humedad: </strong>{this.props.hum}%</p>
				<p><strong>Viento: </strong> {this.props.wind} km/h</p>
				<p><strong>Visibilidad: </strong>{this.props.vis} m.</p>
				<p><strong>Presión: </strong>{this.props.press} mbar.</p>
			</div>	
        )
    } 
}

class AppClima extends React.Component {
	constructor(props) {
		super(props);
		this.handleClimaClick = this.handleClimaClick.bind(this);
		this.state = {
  			descrip: '.....',
  			icon: './assets/images/icons/clima_default.png',
  			temp: '--',
  			min: '--',
  			max: '--',
  			press: '-',
  			hum: '-',
  			vis: '-',
  			wind: '-',
  			sunrise: '--:--',
  			sunset: '--:--',
  			id: 0,
  			city: '---',
  			fecha: '---',
		};
	}

	handleClimaClick() {
		fetch("http://api.openweathermap.org/data/2.5/weather?q=Bogota&units=metric&appid=f3f376b99fe63334a561bad62acb4f94")
			.then(res => res.json())
			.then(
				(response) => {
					console.log(response.main.temp)
					this.setState ({
						temp: response.main.temp,
					});
				},
				(error) => {
					console.log("error")
				}
			)
	}

	render() {
		return (
			<React.Fragment>
				<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
					<FormPronostico />
				</div>

				<div class="offset-lg-1 offset-md-1 offset-sm-1 offset-xs-1"></div>

				<div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">
					<div class="row">

						<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
							<PronosticoHoy 
								ciudad={this.state.city}
								icon={this.state.icon}
								temp={this.state.temp}
								descrip={this.state.descrip}
							/>
						</div>

						<div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
							<PronosticoInfo 
								
							/>		
						</div>

					</div>
				</div>
			</React.Fragment>
		);
	}
}

ReactDOM.render(
	<AppClima />,
	document.getElementById('AppClimaReact')
);