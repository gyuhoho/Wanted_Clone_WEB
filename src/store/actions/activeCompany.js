import { createAction } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../sagas/createRequestSaga';
import * as companyAPI from '../../lib/APIs/company';

export const [
    ACTIVE_COMPANY, 
    ACTIVE_COMPANY_SUCCESS, 
    ACTIVE_COMPANY_FAILURE
] = createRequestActionTypes('company/ACTIVE_COMPANY');

export const getActiveCompany = createAction(
    ACTIVE_COMPANY,
)


export const getActiveCompanySaga = createRequestSaga(ACTIVE_COMPANY, companyAPI.getActiveCompany);