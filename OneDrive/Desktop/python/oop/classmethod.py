class person:
    name="jitu"
    # def changename(self,name):
    #     person.name=name
    #     self.__class__.name="rahul"
    @classmethod
    def changename(cls,name):
        cls.name=name
p1=person()
p1.changename("jitu sharma")
print(p1.name)
print(person.name)