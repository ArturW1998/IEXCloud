import { requestData, requestDataError, fetchData, requestDataSuccess, currentPage, sortDrag } from '../../actions';

import { REQUESTED_DATA, REQUESTED_DATA_FAILED, FETCHED_DATA, REQUESTED_DATA_SUCCEEDED, CURRENT_PAGE, DRAG_HAPPEND } from '../../consts';

describe('Data actions', () => {
  it('requestData', () => {
    const expectedActionRequest = {
      type: REQUESTED_DATA
    };

    expect(requestData()).toEqual(expectedActionRequest);
  });

  it('requestDataSuccess', () => {
    const expectedActionSuccess = {
      type: REQUESTED_DATA_SUCCEEDED,
      result: {
        financials: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      }
    };

    const { result } = expectedActionSuccess;

    expect(requestDataSuccess(result)).toEqual(expectedActionSuccess);
  });

  it('requestDataError', () => {
    const expectedActionError = {
      type: REQUESTED_DATA_FAILED
    };

    expect(requestDataError()).toEqual(expectedActionError);
  });

  it('fetchData', () => {
    const expectedActionFetch = {
      type: FETCHED_DATA
    };

    expect(fetchData()).toEqual(expectedActionFetch);
  });

  it('sortDrag', () => {
    const expectedActionSortDrag = {
      type: DRAG_HAPPEND,
      payload: {
        droppableIndexStart: 0,
        droppableIndexEnd: 1,
        activePage: 1
      }
    };

    const {
      payload: { droppableIndexStart, droppableIndexEnd, activePage }
    } = expectedActionSortDrag;

    expect(sortDrag(droppableIndexStart, droppableIndexEnd, activePage)).toEqual(expectedActionSortDrag);
  });

  it('currentPage', () => {
    const expectedActionCurrentPage = {
      type: CURRENT_PAGE,
      number: 1
    };

    const { number } = expectedActionCurrentPage;

    expect(currentPage(number)).toEqual(expectedActionCurrentPage);
  });
});
