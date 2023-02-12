import { EnterpriseCustomer, IndividualCustomer } from './customer';

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

afterEach(() => jest.clearAllMocks());

describe('EnterpriseCustomer', () => {
  it('shold have name and cnpj', () => {
    const sut = createEnterpriseCustomer('Udemy', '1111');
    expect(sut).toHaveProperty('name', 'Udemy');
    expect(sut).toHaveProperty('cnpj', '1111');
  });

  it('shold have methods to get name and idn for enterprise customers', () => {
    const sut = createEnterpriseCustomer('Udemy', '1111');
    expect(sut.getName()).toBe('Udemy');
    expect(sut.getIDN()).toBe('1111');
  });
});

describe('IndividualCustomer', () => {
  it('shold have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer('Marcos', 'Chalet', '111.111.111-11');
    expect(sut).toHaveProperty('firstName', 'Marcos');
    expect(sut).toHaveProperty('lastName', 'Chalet');
    expect(sut).toHaveProperty('cpf', '111.111.111-11');
  });

  it('shold have methods to get name and idn for individual customers', () => {
    const sut = createIndividualCustomer('Marcos', 'Chalet', '111.111.111-11');
    expect(sut.getName()).toBe('Marcos Chalet');
    expect(sut.getIDN()).toBe('111.111.111-11');
  });
});
