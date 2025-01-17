import React, { useContext } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Note from './component';
import NoteService from './service';
import LayoutContext from '../layout/context';

const NoteContainer = ({ children, ...props }) => {
  const layoutContext = useContext(LayoutContext);
  const { layoutContextDispatch } = layoutContext;
  return (
    <Note {...{ layoutContextDispatch, ...props }}>
      {children}
    </Note>
  );
};

export default withTracker(() => {
  const isLocked = NoteService.isLocked();
  const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
  return {
    isLocked,
    isRTL,
  };
})(NoteContainer);
