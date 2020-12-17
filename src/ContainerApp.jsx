import App from './App';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        state: state
    }
}

const ContainerApp = connect(mapStateToProps) (App);

export default ContainerApp;   