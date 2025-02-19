namespace DeckOfCards
{
    public class Card
    {
        public string Name { get; set; }
        public string Suite { get; set; }
        public int Val { get; set; }

        /* 
        Whenever creating a new constructor, the default empty constructor gets
        overwritten and must be added if you want to be able to create an empty
        instance: new Card()
        */
        public Card() { }
        public Card(string name, string suite, int val)
        {
            Name = name;
            Suite = suite;
            Val = val;
        }

        public override string ToString()
        {
            return $"{Name} of {Suite}";
        }
    }
}