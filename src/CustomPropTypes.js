import propTypes from 'prop-types';

const contactInfoPropType = propTypes.shape({phone: propTypes.string, email: propTypes.string});

export default {
    contactInfo : contactInfoPropType
}