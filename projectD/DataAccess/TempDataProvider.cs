using projectD.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace projectD.DataAccess
{
    public class TempDataProvider
    {



        public List<Organization> GetOrgs()
        {
            return new List<Organization>() { org1, org2 };
        }

        public List<Buyer> GetBuyers()
        {
            return new List<Buyer>() { buyer1, buyer2 };
        }

        public List<Item> GetItems()
        {
            return new List<Item>() { item1, item2, item3 };
        }

        public List<Invoice> GetInvoices()
        {
            Invoice i1 = new Invoice()
            {
                Buyer = buyer1,
                Organization = org1
            };
            Invoice i2 = new Invoice()
            {
                Buyer = buyer1,
                Organization = org2
            };
            Invoice i3 = new Invoice()
            {
                Buyer = buyer2,
                Organization = org1
            };
            Invoice i4 = new Invoice()
            {
                Buyer = buyer2,
                Organization = org2
            };
            return new List<Invoice>() { i1, i2, i3, i4 };
        }

        #region Organizations
        private Organization org1 = new Organization()
        {
            Id = 1,
            Name = "Booster",
            Address = new Address()
            {
                Area = "DefaultArea",
                City = "DefaultCity",
                Detail = "DefaultDetail"
            },
            PaymentDetails = new PaymentDetails()
            {
                Account = "123",
                BankName = "DefaultBank",
                BIK = "123",
                INN = "123",
                KorAccount = "123",
                KPP = "123"
            }
        };
        private Organization org2 = new Organization()
        {
            Id = 2,
            Name = "Debooster",
            Address = new Address()
            {
                Area = "UnDefaultArea",
                City = "UnDefaultCity",
                Detail = "UnDefaultDetail"
            },
            PaymentDetails = new PaymentDetails()
            {
                Account = "123123",
                BankName = "UnDefaultBank",
                BIK = "123123",
                INN = "123123",
                KorAccount = "123123",
                KPP = "123123"
            }
        };
        #endregion

        #region Buyers
        private Buyer buyer1 = new Buyer()
        {
            Id = 1,
            Inn = "1234567890",
            Name = "BoosterBuyer",
            Address = new Address()
            {
                Area = "DefaultArea",
                City = "DefaultCity",
                Detail = "DefaultDetail"
            }
        };
        private Buyer buyer2 = new Buyer()
        {
            Id = 2,
            Inn = "0987654321",
            Name = "DeboosterBuyer",
            Address = new Address()
            {
                Area = "UnDefaultArea",
                City = "UnDefaultCity",
                Detail = "UnDefaultDetail"
            }
        };
        #endregion

        #region Items
        private Item item1 = new Item()
        {
            Id = 1,
            Name = "товар поштучный",
            Type = "шт",
            Price = 10
        };
        private Item item2 = new Item()
        {
            Id = 2,
            Name = "товар покилограммный",
            Type = "кг",
            Price = 5.5
        };
        private Item item3 = new Item()
        {
            Id = 3,
            Name = "товар почасовой",
            Type = "ч",
            Price = 100
        };
        #endregion
    }
}