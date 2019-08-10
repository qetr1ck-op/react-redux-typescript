import { connect } from 'react-redux';
import React from 'react';

interface Props {
  foo: string;
}

interface StateProps {
  todos: string[];
}

const MyComp: React.FC<Props & StateProps> = ({ foo, todos }) => {
  return (
    <div>
      own:foo - {foo}; state:todos - {JSON.stringify(todos)}
    </div>
  );
};

const mapStateToProps = state => {
  return { todos: state.todos };
};

export const MyCompContainer = connect(mapStateToProps)(MyComp);
