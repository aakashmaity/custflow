import { erp } from '@/redux/erp/actions';

import { useSelector, useDispatch } from 'react-redux';

import { selectMailItem } from '@/redux/erp/selectors';

export default function useMail({ entity }) {
  const { isLoading } = useSelector(selectMailItem);
  const dispatch = useDispatch();

  const send = (id, client) => {
    const jsonData = { jsondata: client };
    dispatch(erp.mail({ entity, jsonData }));
  };

  return { send, isLoading };
}
