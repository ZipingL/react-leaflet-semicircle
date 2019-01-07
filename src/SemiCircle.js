import { Path, withLeaflet } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-semicircle';

class SemiCircle extends Path {
    createLeafletElement(props) {
        const { position, ...options } = props;
        return new L.SemiCircle(position, options);
    }
}

export default withLeaflet(SemiCircle);
