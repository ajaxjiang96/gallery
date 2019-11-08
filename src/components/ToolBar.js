import React from 'react';
import { faArrowsAltH, faArrowsAltV } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import IconButton from './IconButton';
import PageIndicator from './PageIndicator';

const ToolBar = ({
  contain, setContain, index, total,
}) => (
    // eslint-disable-next-line react/jsx-indent
    <div className="toolBar">
      {
        contain
          ? <IconButton icon={faArrowsAltH} onClick={() => setContain(false)} />
          : <IconButton icon={faArrowsAltV} onClick={() => setContain(true)} />
      }
      <PageIndicator curr={index} total={total} />
    </div>
    // eslint-disable-next-line indent
  );

ToolBar.propTypes = {
  contain: PropTypes.bool.isRequired,
  setContain: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default ToolBar;
