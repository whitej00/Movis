type ClubInformation = {
  clubName: string,
  accountNumber: string,
  clubMembers: string,
}

function validateCreateClub(values: ClubInformation) {
  const createClubErrors = { clubName: '', accountNumber: '', clubMembers: ''} ;

  if (!(values.clubName.length >= 2 && values.clubName.length < 15)) {
    createClubErrors.clubName = '모임 이름은 2~15자 사이로 입력해주세요.';
  }
  if (values.accountNumber.length !== 4) {
    createClubErrors.accountNumber = '4자리만 입력해주세요.';
  }

  return createClubErrors;
}

export { validateCreateClub };