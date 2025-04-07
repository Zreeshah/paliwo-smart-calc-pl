
import React, { useState } from 'react';
import { Calculator, ChartBar, Car } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { toast } from 'sonner';

interface FuelPrices {
  [key: string]: {
    [currency: string]: number;
  };
}

const fuelPrices: FuelPrices = {
  'benzyna': { 'PLN': 5.94, 'EUR': 1.33, 'USD': 1.44 },
  'diesel': { 'PLN': 5.84, 'EUR': 1.31, 'USD': 1.42 },
  'lpg': { 'PLN': 2.78, 'EUR': 0.62, 'USD': 0.67 }
};

const FuelCostCalculator: React.FC = () => {
  const [distance, setDistance] = useState('');
  const [consumption, setConsumption] = useState('');
  const [fuelPrice, setFuelPrice] = useState('');
  const [fuelType, setFuelType] = useState('benzyna');
  const [currency, setCurrency] = useState('PLN');
  const [passengers, setPassengers] = useState('1');
  const [averageWeight, setAverageWeight] = useState('70');
  
  const [results, setResults] = useState<{
    totalFuelUsed: number;
    totalCost: number;
    costPerPassenger: number;
    carbonFootprint: number;
  } | null>(null);

  const loadCurrentPrice = () => {
    setFuelPrice(fuelPrices[fuelType][currency].toString());
    toast.info(`Załadowano aktualną cenę ${fuelType}`);
  };

  const handleCalculate = () => {
    try {
      const distanceValue = parseFloat(distance);
      let consumptionValue = parseFloat(consumption);
      const priceValue = parseFloat(fuelPrice);
      const passengersValue = parseInt(passengers);
      const weightValue = parseInt(averageWeight);
      
      // Additional consumption based on passenger weight (0.6L per 100km per 100kg)
      const additionalConsumption = (passengersValue * weightValue / 100) * 0.6;
      const totalConsumption = consumptionValue + additionalConsumption;
      
      // Calculate total fuel used
      const totalFuel = (distanceValue / 100) * totalConsumption;
      
      // Calculate total cost
      const totalCost = totalFuel * priceValue;
      
      // Calculate cost per passenger
      const costPerPassenger = totalCost / passengersValue;
      
      // Calculate carbon footprint (rough estimate: 2.3kg CO2 per liter for gasoline)
      let carbonFactor = 2.3; // default for gasoline
      if (fuelType === 'diesel') carbonFactor = 2.7;
      if (fuelType === 'lpg') carbonFactor = 1.6;
      
      const carbonFootprint = totalFuel * carbonFactor;
      
      if (isNaN(totalCost) || !isFinite(totalCost)) {
        toast.error("Wprowadź prawidłowe wartości do obliczeń");
        return;
      }
      
      setResults({
        totalFuelUsed: parseFloat(totalFuel.toFixed(2)),
        totalCost: parseFloat(totalCost.toFixed(2)),
        costPerPassenger: parseFloat(costPerPassenger.toFixed(2)),
        carbonFootprint: parseFloat(carbonFootprint.toFixed(2))
      });
      
      toast.success("Obliczono koszty podróży!");
    } catch (error) {
      toast.error("Wystąpił błąd podczas obliczeń");
    }
  };

  // Get currency symbol
  const getCurrencySymbol = (currencyCode: string) => {
    switch (currencyCode) {
      case 'PLN': return 'zł';
      case 'EUR': return '€';
      case 'USD': return '$';
      default: return currencyCode;
    }
  };

  return (
    <Card className="calculator-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ChartBar className="h-6 w-6 text-brand-orange" />
          Kalkulator Kosztów Paliwa
        </CardTitle>
        <CardDescription>
          Oblicz całkowity koszt podróży i emisję CO2
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid gap-4">
            <div className="grid">
              <Label htmlFor="distance-cost">Dystans (km)</Label>
              <Input
                id="distance-cost"
                type="number"
                placeholder="np. 350"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
              />
            </div>
            
            <div className="grid">
              <Label htmlFor="consumption">
                Średnie zużycie paliwa (L/100km)
              </Label>
              <Input
                id="consumption"
                type="number"
                placeholder="np. 7.5"
                value={consumption}
                onChange={(e) => setConsumption(e.target.value)}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="grid">
                <Label htmlFor="fuel-type-cost">Rodzaj paliwa</Label>
                <Select onValueChange={setFuelType} value={fuelType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Wybierz rodzaj paliwa" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="benzyna">Benzyna</SelectItem>
                    <SelectItem value="diesel">Diesel</SelectItem>
                    <SelectItem value="lpg">LPG</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid">
                <Label htmlFor="currency">Waluta</Label>
                <Select onValueChange={(val) => {
                  setCurrency(val);
                  setFuelPrice(fuelPrices[fuelType][val].toString());
                }} value={currency}>
                  <SelectTrigger>
                    <SelectValue placeholder="Wybierz walutę" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="PLN">PLN (zł)</SelectItem>
                    <SelectItem value="EUR">EUR (€)</SelectItem>
                    <SelectItem value="USD">USD ($)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid">
                <div className="flex justify-between">
                  <Label htmlFor="fuel-price">Cena paliwa</Label>
                  <button 
                    type="button" 
                    className="text-xs text-brand-green hover:underline"
                    onClick={loadCurrentPrice}
                  >
                    Aktualna cena
                  </button>
                </div>
                <Input
                  id="fuel-price"
                  type="number"
                  placeholder={`np. ${fuelPrices[fuelType][currency]}`}
                  value={fuelPrice}
                  onChange={(e) => setFuelPrice(e.target.value)}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid">
                <Label htmlFor="passengers">Liczba pasażerów</Label>
                <Input
                  id="passengers"
                  type="number"
                  placeholder="np. 4"
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  min={1}
                />
              </div>
              
              <div className="grid">
                <Label htmlFor="avg-weight">Średnia waga pasażera (kg)</Label>
                <Input
                  id="avg-weight"
                  type="number"
                  placeholder="np. 70"
                  value={averageWeight}
                  onChange={(e) => setAverageWeight(e.target.value)}
                />
              </div>
            </div>
          </div>
          
          <Button 
            onClick={handleCalculate} 
            className="w-full bg-brand-orange hover:bg-brand-darkorange"
          >
            <Car className="mr-2 h-4 w-4" /> Oblicz koszt podróży
          </Button>
          
          {results && (
            <div className="calculator-results border-brand-lightorange bg-orange-50">
              <h3 className="text-lg font-semibold text-brand-darkorange">Wynik:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                <div>
                  <p className="text-sm text-gray-600">Zużyte paliwo:</p>
                  <p className="text-xl font-bold">{results.totalFuelUsed} L</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Całkowity koszt:</p>
                  <p className="text-xl font-bold">
                    {results.totalCost} {getCurrencySymbol(currency)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Koszt na pasażera:</p>
                  <p className="text-xl font-bold">
                    {results.costPerPassenger} {getCurrencySymbol(currency)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Emisja CO2:</p>
                  <p className="text-xl font-bold">{results.carbonFootprint} kg</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default FuelCostCalculator;
