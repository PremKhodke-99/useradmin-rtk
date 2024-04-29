import { MdDeleteForever } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { removeUser } from '../store/slices/UserSlice';

const DisplayUsers = () => {

    const dispatch = useDispatch();

    const data = useSelector((state) => {
        return state.users;
    });

    const deleteUsers = (id) => {
        dispatch(removeUser(id))
    }

    return (
        <Wrapper>
            {
                data.map((user, id) => (
                    <li key={id}>
                        {user}
                        <button className='delete-btn' onClick={() => deleteUsers(id)}>
                            <MdDeleteForever className='delete-icon' />
                        </button>
                    </li>
                ))
            }
        </Wrapper>
    )
}

const Wrapper = styled.section`
margin: 1rem 3.2rem;

li {
    display: flex;
    justify-content: space-between;
    align-content: center;
    font-size: 18px;
    line-height: 40px;
    border-bottom: 1px solid gray;  
}

.delete-btn {
  background-color: transparent;
  border: none;
}

.delete-icon {
  font-size: 2.6rem;
  color: #f12711;
  filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
  cursor: pointer;
}
@media screen and (max-width: 998px) {
  .admin-subtitle {
    margin-bottom: 1.6rem;
  }
}
`;

export default DisplayUsers